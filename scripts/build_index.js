const fs = require('fs');

function buildTree(startPath) {
  fs.readdir(startPath, (err, entries) => {
    if (err) throw err;
    entries.forEach((file) => {
      fs.readdir(`${startPath}/${file}`, (err, icons) => {
        let fileContent = `/** For ${file} icons **/\n\n`;
        icons.forEach((icon) => {
          let reactComponent = icon.split('.')[0];
          fileContent += `export { default as ${reactComponent}Icon } from './${reactComponent}';\n`;
        });
        fs.writeFileSync(`${startPath}/${file}/index.js`, fileContent);
      });
    });
  });
}

buildTree('lib/ui_icons');
