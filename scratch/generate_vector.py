import cv2
import numpy as np

src_path = 'C:/Users/haika/.gemini/antigravity-ide/brain/777f6c08-c8cc-4f49-b0d0-f04dd745fca1/.user_uploaded/media_1787933293041.png'
img = cv2.imread(src_path, cv2.IMREAD_UNCHANGED)

# In BGR: img[:, :, 0]=Blue, img[:, :, 1]=Green, img[:, :, 2]=Red
b = img[:, :, 0]
g = img[:, :, 1]
r = img[:, :, 2]

# Logo is dark navy: Blue > 60, Red < 100, Green < 120
logo_mask = (b > 60) & (r < 100) & (g < 120)
coords = np.argwhere(logo_mask)
y_min, x_min = coords.min(axis=0)
y_max, x_max = coords.max(axis=0)

print(f"Detected logo bounds: x=[{x_min}, {x_max}], y=[{y_min}, {y_max}]")

cropped = img[y_min:y_max+1, x_min:x_max+1]
h, w, _ = cropped.shape

# Upscale 8x for extreme precision sub-pixel contour tracing
upscale_factor = 8
high_res = cv2.resize(cropped, (w * upscale_factor, h * upscale_factor), interpolation=cv2.INTER_CUBIC)
high_h, high_w, _ = high_res.shape

# Binary mask for full logo: dark pixels vs white background
gray = cv2.cvtColor(high_res[:, :, :3], cv2.COLOR_BGR2GRAY)
_, thresh = cv2.threshold(gray, 180, 255, cv2.THRESH_BINARY_INV)

# Smooth edges slightly to eliminate raster noise/jagged aliasing from original raster screenshot
thresh = cv2.GaussianBlur(thresh, (9, 9), 0)
_, thresh = cv2.threshold(thresh, 127, 255, cv2.THRESH_BINARY)

# Find all contours with hierarchy (RETR_TREE)
contours, hierarchy = cv2.findContours(thresh, cv2.RETR_TREE, cv2.CHAIN_APPROX_TC89_L1)

print(f"High-res contours count: {len(contours)}")

def contour_to_svg_d(cnt, w_orig, h_orig):
    # Simplify slightly with approxPolyDP with tiny epsilon for silky smooth curves
    epsilon = 1.2
    approx = cv2.approxPolyDP(cnt, epsilon, True).reshape(-1, 2)
    
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

# Also detect the darker/medium wave accent layer (#183966 vs #183e72)
# In high_res BGR: Wave shade 2 has lower green and blue (B~102 vs B~114, G~57 vs G~62)
# Grayscale for Wave 2 is around 45-68
wave_mask = (gray >= 40) & (gray <= 70) & (thresh > 0)
# Morphological cleanup
wave_mask = cv2.morphologyEx(wave_mask.astype(np.uint8) * 255, cv2.MORPH_OPEN, np.ones((5, 5), np.uint8))
wave_mask = cv2.GaussianBlur(wave_mask, (7, 7), 0)
_, wave_mask = cv2.threshold(wave_mask, 127, 255, cv2.THRESH_BINARY)
wave_contours, _ = cv2.findContours(wave_mask, cv2.RETR_EXTERNAL, cv2.CHAIN_APPROX_TC89_L1)

# Build main shape SVG
all_main_d = []
for i, cnt in enumerate(contours):
    if cv2.contourArea(cnt) > 500:
        all_main_d.append(contour_to_svg_d(cnt, high_w, high_h))

main_d_str = " ".join(all_main_d)

wave_d_list = []
for cnt in wave_contours:
    if cv2.contourArea(cnt) > 3000:
        wave_d_list.append(contour_to_svg_d(cnt, high_w, high_h))

wave_d_str = " ".join(wave_d_list)

svg_content = f"""<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 1000" fill="none">
  <!-- Base Primary Shape & Letters (#183e72) -->
  <path d="{main_d_str}" fill="#183e72" fill-rule="evenodd" />
  {f'<path d="{wave_d_str}" fill="#183966" fill-rule="evenodd" opacity="0.95" />' if wave_d_str else ''}
</svg>"""

with open('public/logo/flowdevteams-vector.svg', 'w') as f:
    f.write(svg_content)

with open('public/logo.svg', 'w') as f:
    f.write(svg_content)

print("Generated public/logo/flowdevteams-vector.svg and public/logo.svg successfully!")
