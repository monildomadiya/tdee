const fs = require('fs');
const path = require('path');

const appDir = path.join(__dirname, 'app');

function fixPage(filePath) {
  let content = fs.readFileSync(filePath, 'utf-8');
  let changed = false;

  // Append (2026) to title strings if not already present
  // Regex matches: title: "something" or title: 'something' or title: `something`
  content = content.replace(/(title:\s*)(['"`])(.*?)(['"`])/g, (match, prefix, quote1, titleContent, quote2) => {
    // Avoid double appending
    if (titleContent.includes('(2026)')) {
      return match;
    }
    changed = true;
    // Strip trailing space before appending
    let cleanTitle = titleContent.trim();
    return `${prefix}${quote1}${cleanTitle} (2026)${quote2}`;
  });

  // Append description phrase
  content = content.replace(/(description:\s*)(['"`])(.*?)(['"`])/g, (match, prefix, quote1, descContent, quote2) => {
    if (descContent.includes('Updated for 2026')) {
      return match;
    }
    changed = true;
    let cleanDesc = descContent.trim();
    // Ensure it ends with a period before adding our string
    if (cleanDesc.length > 0 && !cleanDesc.endsWith('.')) {
      cleanDesc += '.';
    }
    return `${prefix}${quote1}${cleanDesc} Updated for 2026. Free to use, no signup required.${quote2}`;
  });

  if (changed) {
    fs.writeFileSync(filePath, content, 'utf-8');
    console.log('Fixed', filePath);
  }
}

function traverseDir(dir) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory()) {
      traverseDir(fullPath);
    } else if (file === 'page.jsx') {
      fixPage(fullPath);
    }
  }
}

traverseDir(appDir);
console.log('SEO metadata update complete.');
