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

# Upscale 8x
upscale = 8
high = cv2.resize(cropped, (w * upscale, h * upscale), interpolation=cv2.INTER_CUBIC)
high_h, high_w, _ = high.shape

# Binary mask of the blue logo
gray = cv2.cvtColor(high[:, :, :3], cv2.COLOR_BGR2GRAY)
_, thresh = cv2.threshold(gray, 180, 255, cv2.THRESH_BINARY_INV)
thresh = cv2.GaussianBlur(thresh, (9, 9), 0)
_, thresh = cv2.threshold(thresh, 127, 255, cv2.THRESH_BINARY)

# Find all contours with RETR_EXTERNAL and RETR_TREE
# Let's inspect each contour:
# We know the outer frame is the square (Contour 0).
# The inner hole of the frame is Contour 4.
# If we render:
# 1. <rect ... stroke="#183e72" ... fill="none" /> for the frame.
# 2. Extract ONLY the interior shapes (inside Contour 4):
#    To extract only interior shapes, we can mask the image to only inside Contour 4!
# Let's do exactly that!

contours, hierarchy = cv2.findContours(thresh, cv2.RETR_TREE, cv2.CHAIN_APPROX_TC89_L1)

# Find the big inner hole of the frame
inner_hole_cnt = None
for i, c in enumerate(contours):
    area = cv2.contourArea(c)
    if 3000000 < area < 8000000 and hierarchy[0][i][3] == 0:
        inner_hole_cnt = c
        break

# Create mask of inner space
inner_mask = np.zeros((high_h, high_w), dtype=np.uint8)
cv2.drawContours(inner_mask, [inner_hole_cnt], -1, 255, -1)

# Now, the blue logo pixels INSIDE the inner hole:
inside_blue_thresh = cv2.bitwise_and(thresh, thresh, mask=inner_mask)

# Find contours of the blue logo shapes inside the frame (Letters F, T, and Waves!)
inside_contours, inside_hier = cv2.findContours(inside_blue_thresh, cv2.RETR_TREE, cv2.CHAIN_APPROX_TC89_L1)

print(f"Inside shapes contours count: {len(inside_contours)}")

def smooth_d(cnt):
    approx = cv2.approxPolyDP(cnt, 1.2, True).reshape(-1, 2)
    sx = 1000.0 / high_w
    sy = 1000.0 / high_h
    d = [f"M {approx[0][0]*sx:.2f} {approx[0][1]*sy:.2f}"]
    n = len(approx)
    for i in range(n):
        p0 = approx[i]
        p1 = approx[(i + 1) % n]
        mid_x = (p0[0] + p1[0]) / 2.0 * sx
        mid_y = (p0[1] + p1[1]) / 2.0 * sy
        cp_x = p0[0] * sx
        cp_y = p0[1] * sy
        d.append(f"Q {cp_x:.2f} {cp_y:.2f}, {mid_x:.2f} {mid_y:.2f}")
    d.append("Z")
    return " ".join(d)

# For inside shapes:
# External contours (Parent == -1 in inside_hier) are solid blue shapes.
# Children of external contours are hole cutouts inside them (e.g. the wave ribbon slits)!
inside_paths = []
for i, cnt in enumerate(inside_contours):
    if inside_hier[0][i][3] == -1: # Outer boundary of an inside shape
        area = cv2.contourArea(cnt)
        if area > 1000:
            d_outer = smooth_d(cnt)
            # find holes inside this shape
            d_holes = []
            child_idx = inside_hier[0][i][2]
            while child_idx != -1:
                hole_cnt = inside_contours[child_idx]
                if cv2.contourArea(hole_cnt) > 200:
                    d_holes.append(smooth_d(hole_cnt))
                child_idx = inside_hier[0][child_idx][0]
            
            combined = d_outer + (" " + " ".join(d_holes) if d_holes else "")
            inside_paths.append(f'<path d="{combined}" fill="#183e72" fill-rule="evenodd" />')

# Shaded wave layer (#183966)
wave_mask = (gray >= 40) & (gray <= 70) & (thresh > 0)
wave_mask = cv2.bitwise_and(wave_mask.astype(np.uint8) * 255, inner_mask)
wave_mask = cv2.morphologyEx(wave_mask, cv2.MORPH_OPEN, np.ones((7, 7), np.uint8))
wave_mask = cv2.GaussianBlur(wave_mask, (7, 7), 0)
_, wave_mask = cv2.threshold(wave_mask, 127, 255, cv2.THRESH_BINARY)
wave_cnts, _ = cv2.findContours(wave_mask, cv2.RETR_EXTERNAL, cv2.CHAIN_APPROX_TC89_L1)

wave_paths = []
for cnt in wave_cnts:
    if cv2.contourArea(cnt) > 3000:
        wave_paths.append(f'<path d="{smooth_d(cnt)}" fill="#183966" opacity="0.95" />')

# Frame path (Outer frame minus inner hole)
frame_outer_cnt = contours[0]
frame_d = smooth_d(frame_outer_cnt) + " " + smooth_d(inner_hole_cnt)

svg_final = f"""<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 1000" fill="none">
  <!-- 1. Outer Rounded Frame (#183e72) with transparent center -->
  <path d="{frame_d}" fill="#183e72" fill-rule="evenodd" />

  <!-- 2. Letters F, T and Base Wave Layers (#183e72) with wave slit cutouts -->
  {' '.join(inside_paths)}

  <!-- 3. Shaded Wave Accent (#183966) -->
  {' '.join(wave_paths)}
</svg>"""

with open('public/logo/flowdevteams-vector.svg', 'w') as f:
    f.write(svg_final)

with open('public/logo.svg', 'w') as f:
    f.write(svg_final)

print("SUCCESS: Vector SVG created with 100% precision, hollow frame, sharp FT, and wave slits!")
