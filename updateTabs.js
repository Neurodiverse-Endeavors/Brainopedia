const fs = require('fs');
const path = require('path');

// Target your src directory
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

  // 1. Look for the activeTab useState line
  const stateRegex = /const\s+\[activeTab,\s*setActiveTab\]\s*=\s*useState\((.*?)\);/;
  
  // Skip this file if it doesn't have the tab logic
  if (!stateRegex.test(content)) return; 

  console.log(`Updating tabs in: ${path.basename(filePath)}`);

  // 2. Extract the initial state (e.g., "initialTab || 'process'")
  const match = content.match(stateRegex);
  const initialState = match[1];

  // 3. Define the replacement block
  const replacementBlock = `const [searchParams, setSearchParams] = useSearchParams();\n  const activeTab = searchParams.get('tab') || ${initialState};\n\n  const handleTabChange = (newTab: string) => {\n    setSearchParams({ tab: newTab });\n  };`;

  // 4. Replace the useState line with the new React Router block
  content = content.replace(stateRegex, replacementBlock);

  // 5. Swap all the onClick setters
  content = content.replace(/setActiveTab\(/g, 'handleTabChange(');

  // 6. Inject the import at the very top if it isn't already there
  if (!content.includes('useSearchParams')) {
    content = `import { useSearchParams } from 'react-router-dom';\n` + content;
  }

  // 7. Overwrite the file with the new content
  fs.writeFileSync(filePath, content, 'utf-8');
}

processDirectory(directoryPath);
console.log("Tab sync complete!");