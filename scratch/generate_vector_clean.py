import cv2
import numpy as np

src_path = 'C:/Users/haika/.gemini/antigravity-ide/brain/777f6c08-c8cc-4f49-b0d0-f04dd745fca1/.user_uploaded/media_1787933293041.png'
img = cv2.imread(src_path, cv2.IMREAD_UNCHANGED)

# Crop bounds
b = img[:, :, 0]
g = img[:, :, 1]
r = img[:, :, 2]
logo_mask = (b > 60) & (r < 100) & (g < 120)
coords = np.argwhere(logo_mask)
y_min, x_min = coords.min(axis=0)
y_max, x_max = coords.max(axis=0)

cropped = img[y_min:y_max+1, x_min:x_max+1]
h, w, _ = cropped.shape

# Upscale 8x
upscale_factor = 8
high_res = cv2.resize(cropped, (w * upscale_factor, h * upscale_factor), interpolation=cv2.INTER_CUBIC)
high_h, high_w, _ = high_res.shape

# Background vs foreground threshold
gray = cv2.cvtColor(high_res[:, :, :3], cv2.COLOR_BGR2GRAY)
_, thresh = cv2.threshold(gray, 180, 255, cv2.THRESH_BINARY_INV)

# Smooth edges for silky clean vector lines
thresh_smooth = cv2.GaussianBlur(thresh, (9, 9), 0)
_, thresh_smooth = cv2.threshold(thresh_smooth, 127, 255, cv2.THRESH_BINARY)

# Find contours with RETR_CCOMP (separates external contours and internal holes cleanly!)
contours, hierarchy = cv2.findContours(thresh_smooth, cv2.RETR_CCOMP, cv2.CHAIN_APPROX_TC89_L1)

print(f"Contours count with RETR_CCOMP: {len(contours)}")

def contour_to_svg_path(cnt, w_orig, h_orig):
    # Simplify slightly with epsilon for perfectly smooth bezier arcs
    approx = cv2.approxPolyDP(cnt, 1.2, True).reshape(-1, 2)
    scale_x = 1000.0 / w_orig
    scale_y = 1000.0 / h_orig
    
    d_parts = []
    start = approx[0]
    d_parts.append(f"M {start[0]*scale_x:.2f} {start[1]*scale_y:.2f}")
    
    n = len(approx)
    for i in range(n):
        p0 = approx[i]
        p1 = approx[(i + 1) % n]
        mid_x = (p0[0] + p1[0]) / 2.0 * scale_x
        mid_y = (p0[1] + p1[1]) / 2.0 * scale_y
        cp_x = p0[0] * scale_x
        cp_y = p0[1] * scale_y
        d_parts.append(f"Q {cp_x:.2f} {cp_y:.2f}, {mid_x:.2f} {mid_y:.2f}")
        
    d_parts.append("Z")
    return " ".join(d_parts)

# Separate external filled contours (hierarchy[0][i][3] == -1) and their interior holes
# For RETR_CCOMP:
# hierarchy[0][i] = [Next, Previous, First_Child, Parent]
# If Parent == -1: It is an external boundary. Its children are holes!

paths_xml = []

for i, cnt in enumerate(contours):
    parent = hierarchy[0][i][3]
    if parent == -1: # Outer boundary
        area = cv2.contourArea(cnt)
        if area > 1000:
            d_outer = contour_to_svg_path(cnt, high_w, high_h)
            # Find all direct holes of this outer boundary
            child_idx = hierarchy[0][i][2]
            d_holes = []
            while child_idx != -1:
                child_cnt = contours[child_idx]
                if cv2.contourArea(child_cnt) > 200:
                    d_holes.append(contour_to_svg_path(child_cnt, high_w, high_h))
                child_idx = hierarchy[0][child_idx][0] # next sibling
            
            full_d = d_outer + " " + " ".join(d_holes)
            paths_xml.append(f'<path d="{full_d}" fill="#183e72" fill-rule="evenodd" />')

# Shaded wave layer (between wave lines)
wave_mask = (gray >= 40) & (gray <= 70) & (thresh_smooth > 0)
wave_mask = cv2.morphologyEx(wave_mask.astype(np.uint8) * 255, cv2.MORPH_OPEN, np.ones((7, 7), np.uint8))
wave_mask = cv2.GaussianBlur(wave_mask, (7, 7), 0)
_, wave_mask = cv2.threshold(wave_mask, 127, 255, cv2.THRESH_BINARY)
wave_contours, _ = cv2.findContours(wave_mask, cv2.RETR_EXTERNAL, cv2.CHAIN_APPROX_TC89_L1)

for cnt in wave_contours:
    if cv2.contourArea(cnt) > 4000:
        d_wave = contour_to_svg_path(cnt, high_w, high_h)
        paths_xml.append(f'<path d="{d_wave}" fill="#183966" opacity="0.95" />')

svg_content = f"""<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 1000" fill="none">
  {' '.join(paths_xml)}
</svg>"""

with open('public/logo/flowdevteams-vector.svg', 'w') as f:
    f.write(svg_content)

with open('public/logo.svg', 'w') as f:
    f.write(svg_content)

print("Generated clean, hole-aware vector SVG successfully!")
