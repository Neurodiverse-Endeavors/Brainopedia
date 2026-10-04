import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const directoryPath = path.join(__dirname, 'src'); 

function processDirectory(dir) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory()) {
      processDirectory(fullPath);
    } else if (fullPath.endsWith('.tsx')) {
      processFile(fullPath);
    }
  }
}

function processFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf-8');
  let modified = false;

  // 1. FIX THE RED SQUIGGLE: Inject the missing import at the very top
  if (content.includes('useSearchParams') && !content.includes('react-router-dom')) {
    content = `import { useSearchParams } from 'react-router-dom';\n` + content;
    modified = true;
  }

  // 2. FIX THE RED SQUIGGLE: Add initialTab to the TypeScript interface
  if (content.includes("searchParams.get('tab')") && !content.includes('initialTab?: string')) {
    const interfaceRegex = /(interface\s+\w+Props\s*\{[\s\S]*?)(\})/;
    content = content.replace(interfaceRegex, (match, before, after) => {
      return before + `  initialTab?: string;\n` + after;
    });
    modified = true;
  }

  // 3. FIX THE YELLOW SQUIGGLE: Remove unused useState import
  if (content.includes("import { useState } from 'react'") && !content.includes("useState(")) {
    content = content.replace(/import\s*\{\s*useState\s*\}\s*from\s*['"]react['"];?\n?/, '');
    modified = true;
  }

  if (modified) {
    fs.writeFileSync(filePath, content, 'utf-8');
    console.log(`Patched: ${path.basename(filePath)}`);
  }
}

processDirectory(directoryPath);
console.log("Patch complete! Errors cleared.");