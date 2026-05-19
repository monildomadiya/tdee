const fs = require('fs');
const path = require('path');

const appDir = path.join(__dirname, 'app');

function fixPage(filePath, dirName) {
  let content = fs.readFileSync(filePath, 'utf-8');
  let changed = false;

  // 1. Fix Canonical URL
  if (content.match(/canonical:\s*['"]https:\/\/tdee\.tech\/([^'"]*?)['"]/)) {
    content = content.replace(/canonical:\s*['"](https:\/\/tdee\.tech\/[^'"]*?)['"]/g, (match, url) => {
      if (!url.endsWith('/')) {
        changed = true;
        return `canonical: '${url}/'`;
      }
      return match;
    });
  }

  // 2. Fix og:url
  if (content.match(/url:\s*['"]https:\/\/tdee\.tech\/([^'"]*?)['"]/)) {
    content = content.replace(/url:\s*['"](https:\/\/tdee\.tech\/[^'"]*?)['"]/g, (match, url) => {
      if (!url.endsWith('/')) {
        changed = true;
        return `url: '${url}/'`;
      }
      return match;
    });
  }

  // 3. Remove keywords
  if (content.includes('keywords:')) {
    content = content.replace(/keywords:\s*\[.*?\]\s*,/s, '');
    content = content.replace(/keywords:\s*['"].*?['"]\s*,/, '');
    changed = true;
  }

  // 4. Fix og:image
  // If openGraph is present but lacks images or has bad images
  if (content.includes('openGraph:') && !content.includes('og-image.png')) {
    // try to inject images into openGraph
    content = content.replace(/openGraph:\s*\{/, `openGraph: {\n    images: [{ url: 'https://tdee.tech/og-image.png', width: 1200, height: 630 }],`);
    changed = true;
  } else if (content.includes('images: [\'https://tdee.tech/og-image.png\']')) {
    content = content.replace(/images:\s*\['https:\/\/tdee\.tech\/og-image\.png'\]/, `images: [{ url: 'https://tdee.tech/og-image.png', width: 1200, height: 630 }]`);
    changed = true;
  } else if (content.includes('images: [\'/og-image.png\']')) {
    content = content.replace(/images:\s*\['\/og-image\.png'\]/, `images: [{ url: 'https://tdee.tech/og-image.png', width: 1200, height: 630 }]`);
    changed = true;
  }

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
      fixPage(fullPath, path.basename(dir));
    }
  }
}

traverseDir(appDir);
