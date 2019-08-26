const fs = require('fs');

function buildTree(startPath) {
  fs.readdir(startPath, (err, entries) => {
    if (err) throw err;
    let moduleContent = '/** Root (Provider) component for UIIcons **/\n\n';
    entries.forEach((file) => {
      fs.readdir(`${startPath}/${file}`, (err, icons) => {
        let fileContent = `/** For ${file} icons **/\n\n`;
        icons.forEach((icon) => {
          let reactComponent = icon.split('.')[0];
          fileContent += `export { default as ${reactComponent}Icon } from './${reactComponent}';\n`;
        });
        fs.writeFileSync(`${startPath}/${file}/index.js`, fileContent);
      });
      moduleContent += `/** export ${file} **/\n`;
      moduleContent += `export { default as ${file} } from './ui_icons/${file}';\n`;
    });
    fs.writeFileSync('lib/index.js', moduleContent);
  });
}

buildTree('lib/ui_icons');
