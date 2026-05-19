const fs = require('fs');
const path = require('path');

function fixFile(filePath) {
  if (!fs.existsSync(filePath)) return;
  let content = fs.readFileSync(filePath, 'utf-8');
  
  // Replace:
  // /
  //   intro="..."
  // >
  // with:
  // intro="..."
  // />
  
  // A regex to fix: `/\n  intro="` -> `\n  intro="` and then add ` /` at the end before `>`
  
  let changed = false;
  if (content.match(/\/\r?\n\s+intro="/)) {
    content = content.replace(/\/\r?\n(\s+intro="[^"]+?")>/g, '\n$1 />');
    changed = true;
  }

  if (changed) {
    fs.writeFileSync(filePath, content, 'utf-8');
    console.log('Fixed syntax in', filePath);
  }
}

const appDir = path.join(__dirname, 'app');
const dirs = fs.readdirSync(appDir);

dirs.forEach(dir => {
  if (dir.startsWith('tdee-calculator-')) {
    const clientPath = path.join(appDir, dir, 'ClientComponent.jsx');
    fixFile(clientPath);
  }
});
