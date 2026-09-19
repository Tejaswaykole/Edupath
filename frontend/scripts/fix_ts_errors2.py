import os
import re

PAGES_DIR = r"T:\My Projects\Agentic AI Hackathon\Edupath\frontend\src\pages\generated"

for f in os.listdir(PAGES_DIR):
    if not f.endswith(".tsx"): continue
    filepath = os.path.join(PAGES_DIR, f)
    with open(filepath, "r", encoding="utf-8") as file:
        content = file.read()
    
    content = content.replace(' oninput="', ' onInput="')
    content = content.replace(' preserveaspectratio="', ' preserveAspectRatio="')
    content = re.sub(r'checked="(.*?)"', 'defaultChecked', content)
    content = re.sub(r'required="(.*?)"', 'required', content)
    content = re.sub(r'disabled="(.*?)"', 'disabled', content)
    content = re.sub(r'rows="(\d+)"', r'rows={\1}', content)

    with open(filepath, "w", encoding="utf-8") as file:
        file.write(content)

print("Fixed remaining TS errors.")
