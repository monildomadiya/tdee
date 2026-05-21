const fs = require('fs');
const path = require('path');

function traverseDir(dir) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory()) {
      traverseDir(fullPath);
    } else if (file.endsWith('.jsx')) {
      let content = fs.readFileSync(fullPath, 'utf-8');
      if (content.includes('rel="noopener noreferrer"')) {
        content = content.replace(/rel="noopener noreferrer"/g, 'rel="nofollow noopener noreferrer"');
        fs.writeFileSync(fullPath, content, 'utf-8');
        console.log('Fixed', fullPath);
      }
    }
  }
}

traverseDir(path.join(__dirname, 'app'));
console.log('Nofollow added.');
