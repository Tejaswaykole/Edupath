const fs = require('fs');
const path = require('path');
const { JSDOM } = require('jsdom');
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

      // Strip inline styles before parsing to avoid AST issues
      htmlContent = htmlContent.replace(/<style[^>]*>[\s\S]*?<\/style>/gi, '');
      htmlContent = htmlContent.replace(/<script[^>]*>[\s\S]*?<\/script>/gi, '');
      htmlContent = htmlContent.replace(/\bstyle="[^"]*"/gi, '');
      // Fix curly braces in text nodes by encoding them
      htmlContent = htmlContent.replace(/\{/g, '&#123;').replace(/\}/g, '&#125;');

      // Parse with JSDOM to ensure perfect HTML validation and tag closing
      const dom = new JSDOM(htmlContent);
      
      let mainElement = dom.window.document.querySelector('main');
      let content = '';
      
      if (mainElement) {
        content = mainElement.outerHTML;
      } else {
        content = dom.window.document.body.innerHTML;
      }

      // Convert to JSX
      let jsxContent = converter.convert(content);
      
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

console.log(`Generated robust React components in ${PAGES_DIR}`);
