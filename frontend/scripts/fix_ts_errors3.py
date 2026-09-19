import os
import re

PAGES_DIR = r"T:\My Projects\Agentic AI Hackathon\Edupath\frontend\src\pages\generated"

for f in os.listdir(PAGES_DIR):
    if not f.endswith(".tsx"): continue
    filepath = os.path.join(PAGES_DIR, f)
    with open(filepath, "r", encoding="utf-8") as file:
        content = file.read()
    
    # Remove all inline event handlers
    content = re.sub(r'\bon[A-Z][a-zA-Z]+="[^"]*"', '', content)
    
    # Fix boolean attributes
    content = re.sub(r'\bchecked(="[^"]*")?', 'defaultChecked', content)
    # The above might replace defaultChecked with defaultdefaultChecked if run twice, so:
    content = content.replace("defaultdefaultChecked", "defaultChecked")
    content = content.replace("defaultChecked=\"\"", "defaultChecked")
    content = content.replace("defaultChecked=\"checked\"", "defaultChecked")
    
    content = re.sub(r'\brequired(="[^"]*")?', 'required', content)
    content = content.replace("required=\"\"", "required")
    
    content = re.sub(r'\bdisabled(="[^"]*")?', 'disabled', content)
    content = content.replace("disabled=\"\"", "disabled")

    with open(filepath, "w", encoding="utf-8") as file:
        file.write(content)

print("Fixed final TS errors.")
