const fs = require('fs');
const path = require('path');
const HTMLtoJSX = require('html-to-jsx');

const UI_REF_DIR = 'T:\\My Projects\\Agentic AI Hackathon\\Edupath\\ui_reference';
const PAGES_DIR = 'T:\\My Projects\\Agentic AI Hackathon\\Edupath\\frontend\\src\\pages\\generated';

const converter = new HTMLtoJSX({
  createClass: false,
});

if (!fs.existsSync(PAGES_DIR)) {
  fs.mkdirSync(PAGES_DIR, { recursive: true });
}

const zips = ['zip6', 'zip7', 'zip8'];

zips.forEach((zipFolder) => {
  const basePath = path.join(UI_REF_DIR, zipFolder, 'stitch_edupath_foundation_onboarding_platform');
  if (!fs.existsSync(basePath)) return;

  const screens = fs.readdirSync(basePath);
  screens.forEach((screenFolder) => {
    const screenPath = path.join(basePath, screenFolder);
    const htmlPath = path.join(screenPath, 'code.html');

    if (fs.statSync(screenPath).isDirectory() && fs.existsSync(htmlPath)) {
      let htmlContent = fs.readFileSync(htmlPath, 'utf8');

      // Extract main or body content
      let content = htmlContent;
      const mainMatch = htmlContent.match(/<main[^>]*>([\s\S]*?)<\/main>/i);
      if (mainMatch) {
        content = htmlContent.match(/(<main[^>]*>)/i)[1] + mainMatch[1] + '</main>';
      } else {
        const bodyMatch = htmlContent.match(/<body[^>]*>([\s\S]*?)<\/body>/i);
        if (bodyMatch) {
          content = bodyMatch[1];
        }
      }

      // Convert to JSX
      let jsxContent = converter.convert(content);
      
      // Remove class->className error in output if html-to-jsx adds it
      // html-to-jsx handles this natively, so we just wrap it in a functional component.

      const compName = screenFolder
        .split('_')
        .map((p) => p.charAt(0).toUpperCase() + p.slice(1))
        .join('');

      const fileContent = `import React from 'react';

export default function ${compName}() {
  return (
    <div className="min-h-screen bg-surface">
      {/* Generated from Stitch UI */}
      ${jsxContent}
    </div>
  );
}
`;
      const outPath = path.join(PAGES_DIR, `${compName}.tsx`);
      fs.writeFileSync(outPath, fileContent, 'utf8');
    }
  });
});

console.log(`Generated React components correctly via html-to-jsx in ${PAGES_DIR}`);
