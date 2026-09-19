import os

PAGES_DIR = r"T:\My Projects\Agentic AI Hackathon\Edupath\frontend\src\pages\generated"
APP_TSX = r"T:\My Projects\Agentic AI Hackathon\Edupath\frontend\src\App.tsx"

pages = []
for file in os.listdir(PAGES_DIR):
    if file.endswith(".tsx"):
        comp_name = file.replace(".tsx", "")
        pages.append(comp_name)
        
pages.sort()

imports = [f"import {comp} from './pages/generated/{comp}';" for comp in pages]
routes = [f'        <Route path="/{comp.lower().replace("edupath", "").strip("-")}" element={{<{comp} />}} />' for comp in pages]

app_content = f"""import {{ BrowserRouter, Routes, Route, Navigate }} from 'react-router-dom';
import {{ ProtectedRoute }} from './routes/ProtectedRoute';

// Generated UI Screens
{chr(10).join(imports)}

function App() {{
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={{<Navigate to="/landingpage" replace />}} />
        
{chr(10).join(routes)}
      </Routes>
    </BrowserRouter>
  );
}}

export default App;
"""

with open(APP_TSX, 'w', encoding='utf-8') as f:
    f.write(app_content)
    
print("App.tsx updated with all generated routes.")
