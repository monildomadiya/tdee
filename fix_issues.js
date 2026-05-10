const fs = require('fs');
const path = require('path');
const dir = path.join(__dirname, 'app');
function walk(dir) {
  let results = [];
  const list = fs.readdirSync(dir);
  list.forEach((file) => {
    file = path.join(dir, file);
    const stat = fs.statSync(file);
    if (stat && stat.isDirectory()) {
      results = results.concat(walk(file));
    } else {
      if (file.endsWith('ClientComponent.jsx')) results.push(file);
    }
  });
  return results;
}
const files = walk(dir);
files.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');
  content = content.replace(/minmax\(200px, 1fr\)/g, "minmax(140px, 1fr)");
  content = content.replace(/className="btn outline" style=\{\{ textAlign: 'center' \}\}/g, "className=\"btn outline\" style={{ textAlign: 'center', padding: '10px 15px', fontSize: '0.85rem' }}");
  fs.writeFileSync(file, content);
});
console.log('Fixed tags in ' + files.length + ' files.');

const globalsPath = path.join(dir, 'globals.css');
let globalsContent = fs.readFileSync(globalsPath, 'utf8');
globalsContent = globalsContent.replace(/scroll-behavior:smooth/g, 'scroll-behavior:auto');
fs.writeFileSync(globalsPath, globalsContent);
console.log('Fixed scroll behavior.');
