import os
import re
import html

UI_REF_DIR = r"T:\My Projects\Agentic AI Hackathon\Edupath\ui_reference"
PAGES_DIR = r"T:\My Projects\Agentic AI Hackathon\Edupath\frontend\src\pages\generated"

def convert_html_to_jsx(html_content, component_name):
    # Extract main or body
    main_match = re.search(r'<main[^>]*>(.*?)</main>', html_content, re.DOTALL | re.IGNORECASE)
    if main_match:
        content = main_match.group(1)
        main_tag = re.search(r'(<main[^>]*>)', html_content, re.IGNORECASE).group(1)
        content = f"{main_tag}{content}</main>"
    else:
        body_match = re.search(r'<body[^>]*>(.*?)</body>', html_content, re.DOTALL | re.IGNORECASE)
        if body_match:
            content = body_match.group(1)
        else:
            content = html_content
            
    # Remove inline style tags entirely
    content = re.sub(r'<style>.*?</style>', '', content, flags=re.DOTALL | re.IGNORECASE)
    
    # Remove inline script tags entirely
    content = re.sub(r'<script.*?</script>', '', content, flags=re.DOTALL | re.IGNORECASE)

    # Remove all style attributes
    content = re.sub(r'\bstyle="[^"]*"', '', content)
    
    # Replace class= with className=
    content = content.replace('class="', 'className="')
    content = content.replace('class=\'', 'className=\'')
    
    # Replace for= with htmlFor=
    content = content.replace('for="', 'htmlFor="')
    
    # Close self-closing tags
    content = re.sub(r'<img([^>]*?)(?<!/)>', r'<img\1 />', content)
    content = re.sub(r'<input([^>]*?)(?<!/)>', r'<input\1 />', content)
    content = re.sub(r'<hr([^>]*?)(?<!/)>', r'<hr\1 />', content)
    content = re.sub(r'<br([^>]*?)(?<!/)>', r'<br\1 />', content)

    # Remove HTML comments
    content = re.sub(r'<!--(.*?)-->', r'{/* \1 */}', content, flags=re.DOTALL)
    
    # Escape raw braces that aren't JSX
    # A simple but highly effective way:
    # First, replace { with {'{'} and } with {'}'} ONLY in text nodes.
    # This is tricky with regex, so we'll just replace { and } with &#123; and &#125; if they are not part of our comment replacement.
    content = content.replace('{/* ', '___JSX_COMMENT_START___')
    content = content.replace(' */}', '___JSX_COMMENT_END___')
    content = content.replace('{', '&#123;')
    content = content.replace('}', '&#125;')
    content = content.replace('___JSX_COMMENT_START___', '{/* ')
    content = content.replace('___JSX_COMMENT_END___', ' */}')

    # Make sure to close open tags if EOF is reached.
    if "<main" in content and "</main>" not in content:
        content += "</main>"
    
    jsx = f"""import React from 'react';

export default function {component_name}() {{
  return (
    <div className="min-h-screen bg-surface">
      {{/* Generated from Stitch UI */}}
      {content}
    </div>
  );
}}
"""
    return jsx

os.makedirs(PAGES_DIR, exist_ok=True)

for zip_folder in ['zip6', 'zip7', 'zip8']:
    base_path = os.path.join(UI_REF_DIR, zip_folder, "stitch_edupath_foundation_onboarding_platform")
    if not os.path.exists(base_path):
        continue
        
    for screen_folder in os.listdir(base_path):
        screen_path = os.path.join(base_path, screen_folder)
        html_path = os.path.join(screen_path, "code.html")
        
        if os.path.isdir(screen_path) and os.path.exists(html_path):
            with open(html_path, 'r', encoding='utf-8') as f:
                html_content = f.read()
            
            parts = screen_folder.split('_')
            comp_name = "".join([p.capitalize() for p in parts])
            
            jsx_content = convert_html_to_jsx(html_content, comp_name)
            
            out_path = os.path.join(PAGES_DIR, f"{comp_name}.tsx")
            with open(out_path, 'w', encoding='utf-8') as f:
                f.write(jsx_content)

print(f"Generated clean React components in {PAGES_DIR}")
