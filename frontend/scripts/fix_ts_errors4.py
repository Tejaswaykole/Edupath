import os
import re

PAGES_DIR = r"T:\My Projects\Agentic AI Hackathon\Edupath\frontend\src\pages\generated"

for f in os.listdir(PAGES_DIR):
    if not f.endswith(".tsx"): continue
    filepath = os.path.join(PAGES_DIR, f)
    with open(filepath, "r", encoding="utf-8") as file:
        content = file.read()
    
    # fix selected=""
    content = content.replace('selected=""', 'defaultValue=""')
    
    # fix maxLength="number"
    content = re.sub(r'maxLength="(\d+)"', r'maxLength={\1}', content)

    with open(filepath, "w", encoding="utf-8") as file:
        file.write(content)

print("Fixed selected and maxLength TS errors.")
