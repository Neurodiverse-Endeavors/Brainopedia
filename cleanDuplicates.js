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
  
  // This regex hunts down any function block formatted exactly like the error 
  // (e.g., const handleTabChange = (tabId: string) => { handleTabChange(tabId); };)
  const duplicateRegex = /const\s+handleTabChange\s*=\s*\([\w\s:]+\)\s*=>\s*\{\s*handleTabChange\([\w]+\);\s*\};?/g;
  
  if (duplicateRegex.test(content)) {
    content = content.replace(duplicateRegex, '');
    fs.writeFileSync(filePath, content, 'utf-8');
    console.log(`Cleaned duplicate in: ${path.basename(filePath)}`);
  }
}

processDirectory(directoryPath);
console.log("Cleanup complete!");