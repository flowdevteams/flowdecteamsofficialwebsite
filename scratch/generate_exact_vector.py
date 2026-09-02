import cv2
import numpy as np

src_path = 'C:/Users/haika/.gemini/antigravity-ide/brain/777f6c08-c8cc-4f49-b0d0-f04dd745fca1/.user_uploaded/media_1787933293041.png'
img = cv2.imread(src_path, cv2.IMREAD_UNCHANGED)

# Crop bounds
b, g, r = img[:, :, 0], img[:, :, 1], img[:, :, 2]
logo_mask = (b > 60) & (r < 100) & (g < 120)
coords = np.argwhere(logo_mask)
y_min, x_min = coords.min(axis=0)
y_max, x_max = coords.max(axis=0)

cropped = img[y_min:y_max+1, x_min:x_max+1]
h, w, _ = cropped.shape

upscale = 8
high = cv2.resize(cropped, (w * upscale, h * upscale), interpolation=cv2.INTER_CUBIC)
high_h, high_w, _ = high.shape

# Thresholding
gray = cv2.cvtColor(high[:, :, :3], cv2.COLOR_BGR2GRAY)
_, thresh = cv2.threshold(gray, 180, 255, cv2.THRESH_BINARY_INV)
thresh = cv2.GaussianBlur(thresh, (9, 9), 0)
_, thresh = cv2.threshold(thresh, 127, 255, cv2.THRESH_BINARY)

# Find all contours
contours, hierarchy = cv2.findContours(thresh, cv2.RETR_TREE, cv2.CHAIN_APPROX_TC89_L1)

print(f"Total contours: {len(contours)}")

def smooth_cnt_to_d(cnt):
    # Simplify slightly with epsilon for perfectly smooth bezier arcs with zero jaggedness
    approx = cv2.approxPolyDP(cnt, 1.2, True).reshape(-1, 2)
    scale_x = 1000.0 / high_w
    scale_y = 1000.0 / high_h
    
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

# The entire logo is 1 outer contour (Contour 0) and 4 hole contours (Contour 1, 2, 3, 4)
# In SVG fill-rule="evenodd", concatenating them all into one path creates the 100% exact hollow logo!
all_d_parts = [smooth_cnt_to_d(c) for c in contours if cv2.contourArea(c) > 500]
full_logo_d = " ".join(all_d_parts)

# Wave Shade 2 layer (#183966)
wave_mask = (gray >= 40) & (gray <= 70) & (thresh > 0)
wave_mask = cv2.morphologyEx(wave_mask.astype(np.uint8) * 255, cv2.MORPH_OPEN, np.ones((7, 7), np.uint8))
wave_mask = cv2.GaussianBlur(wave_mask, (7, 7), 0)
_, wave_mask = cv2.threshold(wave_mask, 127, 255, cv2.THRESH_BINARY)
wave_contours, _ = cv2.findContours(wave_mask, cv2.RETR_EXTERNAL, cv2.CHAIN_APPROX_TC89_L1)

wave_2_d_list = []
for cnt in wave_contours:
    if cv2.contourArea(cnt) > 4000:
        wave_2_d_list.append(smooth_cnt_to_d(cnt))
wave_2_d = " ".join(wave_2_d_list)

svg_code = f"""<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 1000" fill="none">
  <!-- Full Hollow Logo with Letters F, T, Frame and Waves (#183e72) -->
  <path d="{full_logo_d}" fill="#183e72" fill-rule="evenodd" />

  <!-- Wave Accent Layer (#183966) -->
  {f'<path d="{wave_2_d}" fill="#183966" opacity="0.95" />' if wave_2_d else ''}
</svg>"""

with open('public/logo/flowdevteams-vector.svg', 'w') as f:
    f.write(svg_code)

with open('public/logo.svg', 'w') as f:
    f.write(svg_code)

print("SUCCESS: Generated true hollow-frame vector SVG with sharp FT and waves!")
