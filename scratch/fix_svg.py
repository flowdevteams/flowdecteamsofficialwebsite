import re

filepath = r'c:\Ngoding\Projects\Flowdev Teams Project\Flowdev Teams Official Website\FlowdevTeams\public\logo\flowdevteams-vector.svg'

with open(filepath, 'r') as f:
    content = f.read()

# 1. Remove the white rect
content = re.sub(r'<!-- White background.*?-->\s*<rect[^>]*fill="white"\s*/>\s*', '', content, flags=re.DOTALL)

# 2. Extract inner cutout from path 2
path2_match = re.search(r'<path d="(M 17\.29 26\.07.*?)"', content)
if path2_match:
    d2 = path2_match.group(1)
    last_m_index = d2.rfind('M 101.06 121.66')
    if last_m_index != -1:
        inner_cutout = d2[last_m_index:]
        
        # 3. Append to path 1 and add fill-rule="evenodd"
        def replace_path1(match):
            return f'<path d="{match.group(1)} {inner_cutout}" fill="#183966" opacity="0.95" fill-rule="evenodd" />'
            
        content = re.sub(r'<path d="(M 23\.27 22\.73.*?)" fill="#183966" opacity="0.95" />', replace_path1, content)

with open(filepath, 'w') as f:
    f.write(content)
print("SVG transparency fixed!")
