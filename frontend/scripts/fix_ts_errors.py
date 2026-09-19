import os
import re

PAGES_DIR = r"T:\My Projects\Agentic AI Hackathon\Edupath\frontend\src\pages\generated"

for f in os.listdir(PAGES_DIR):
    if not f.endswith(".tsx"): continue
    filepath = os.path.join(PAGES_DIR, f)
    with open(filepath, "r", encoding="utf-8") as file:
        content = file.read()
    
    # Fix boolean attributes like checked="", required="", disabled=""
    content = re.sub(r'\bchecked=""', 'defaultChecked', content)
    content = re.sub(r'\brequired=""', 'required', content)
    content = re.sub(r'\bdisabled=""', 'disabled', content)
    
    # Fix string number attributes like rows="4", cols="30" (very common)
    content = re.sub(r'\brows="(\d+)"', r'rows={\1}', content)
    content = re.sub(r'\bcols="(\d+)"', r'cols={\1}', content)
    
    # Fix casing for events and SVG attributes
    content = content.replace(' onclick="', ' onClick="')
    content = content.replace(' onsubmit="', ' onSubmit="')
    content = content.replace(' viewbox="', ' viewBox="')
    content = content.replace(' tabindex="', ' tabIndex="')
    content = content.replace(' maxlength="', ' maxLength="')
    
    # Ignore the onClick string error by just removing the onClick="" or onSubmit="" entirely
    # as these are static designs, we don't need the JS snippet inside them (which usually is `onclick="something()"`).
    content = re.sub(r'\b(onClick|onSubmit)="[^"]*"', '', content)
    
    # Fix 'React' is declared but its value is never read (TS6133)
    # Just let Vite/TS ignore it, or remove the import if not needed.
    # We can just remove `import React from 'react';` since React 17+ doesn't need it.
    content = content.replace("import React from 'react';\n", "")

    with open(filepath, "w", encoding="utf-8") as file:
        file.write(content)

print("Fixed common TS attribute casing and typing errors.")
