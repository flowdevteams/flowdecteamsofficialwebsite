import cv2
import numpy as np

src_path = 'C:/Users/haika/.gemini/antigravity-ide/brain/777f6c08-c8cc-4f49-b0d0-f04dd745fca1/.user_uploaded/media_1787933293041.png'
img = cv2.imread(src_path, cv2.IMREAD_UNCHANGED)

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

gray = cv2.cvtColor(high[:, :, :3], cv2.COLOR_BGR2GRAY)
_, thresh = cv2.threshold(gray, 180, 255, cv2.THRESH_BINARY_INV)
thresh = cv2.GaussianBlur(thresh, (9, 9), 0)
_, thresh = cv2.threshold(thresh, 127, 255, cv2.THRESH_BINARY)

contours, hierarchy = cv2.findContours(thresh, cv2.RETR_TREE, cv2.CHAIN_APPROX_TC89_L1)

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

all_paths = [smooth_d(c) for c in contours if cv2.contourArea(c) > 500]
full_d = " ".join(all_paths)

# Also wave accent (#183966)
wave_mask = (gray >= 40) & (gray <= 70) & (thresh > 0)
wave_mask = cv2.morphologyEx(wave_mask.astype(np.uint8) * 255, cv2.MORPH_OPEN, np.ones((7, 7), np.uint8))
wave_mask = cv2.GaussianBlur(wave_mask, (7, 7), 0)
_, wave_mask = cv2.threshold(wave_mask, 127, 255, cv2.THRESH_BINARY)
wave_cnts, _ = cv2.findContours(wave_mask, cv2.RETR_EXTERNAL, cv2.CHAIN_APPROX_TC89_L1)

wave_paths = []
for cnt in wave_cnts:
    if cv2.contourArea(cnt) > 4000:
        wave_paths.append(f'<path d="{smooth_d(cnt)}" fill="#183966" opacity="0.95" />')

svg = f"""<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 1000" fill="none">
  <!-- Full True Vector Logo (#183e72) with silky smooth curves, sharp lines, zero aliasing -->
  <path d="{full_d}" fill="#183e72" fill-rule="evenodd" />
  {' '.join(wave_paths)}
</svg>"""

with open('public/logo/flowdevteams-vector.svg', 'w') as f:
    f.write(svg)

with open('public/logo.svg', 'w') as f:
    f.write(svg)

print("Generated true 100% vector SVG successfully!")
