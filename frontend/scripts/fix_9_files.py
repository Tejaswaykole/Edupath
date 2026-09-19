import os

PAGES_DIR = r"T:\My Projects\Agentic AI Hackathon\Edupath\frontend\src\pages\generated"

def append_closing_tags(filename, tags):
    filepath = os.path.join(PAGES_DIR, filename)
    with open(filepath, "r", encoding="utf-8") as f:
        content = f.read()
    
    # Remove the last two lines: "  );\n}\n"
    lines = content.split('\n')
    while lines and lines[-1].strip() in ["", "}", ");"]:
        lines.pop()
    
    # Wait, the end of the file is:
    #     </div>
    #   );
    # }
    
    content = '\n'.join(lines)
    content += "\n" + tags + "\n  );\n}\n"
    
    with open(filepath, "w", encoding="utf-8") as f:
        f.write(content)

# RoleSelectionEdupath: Needs </div></div></main>
append_closing_tags("RoleSelectionEdupath.tsx", "</div></main>")

# MentorshipWorkspaceActiveGuidanceEdupath: error TS1381: Unexpected token. Did you mean {'}'} or &rbrace;?
# It likely has a raw } somewhere in the text. Let's replace raw } and { in the file.
def fix_raw_braces(filename):
    filepath = os.path.join(PAGES_DIR, filename)
    with open(filepath, "r", encoding="utf-8") as f:
        content = f.read()
    
    # We can replace all { and } that are NOT next to whitespace or standard jsx structure.
    # Actually, a simpler way is to just replace the specific lines that failed.
    # Or just replace { with &#123; everywhere EXCEPT inside className="..." and tags.
    # We already have a working script that almost works.
    pass

def fix_all_ts_errors():
    for f in os.listdir(PAGES_DIR):
        if not f.endswith(".tsx"): continue
        filepath = os.path.join(PAGES_DIR, f)
        with open(filepath, "r", encoding="utf-8") as file:
            c = file.read()
        
        # fix missing </main>
        if "<main" in c and "</main>" not in c:
            c = c.replace("  );\n}", "</main>\n  );\n}")
        
        # balance main and div roughly at the end if the file failed.
        # This is a bit hacky but effective for bulk generated UI mockups.
        open_mains = c.count("<main")
        close_mains = c.count("</main")
        if open_mains > close_mains:
            c = c.replace("  );\n}", "</main>" * (open_mains - close_mains) + "\n  );\n}")
            
        open_divs = c.count("<div")
        close_divs = c.count("</div")
        if open_divs > close_divs:
            c = c.replace("  );\n}", "</div>" * (open_divs - close_divs) + "\n  );\n}")

        with open(filepath, "w", encoding="utf-8") as file:
            file.write(c)

fix_all_ts_errors()
print("Fixed missing closing tags.")
