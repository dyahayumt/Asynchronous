const fs = require('fs');

fs.writeFile('file.txt', 'newfile.txt', (err) => {
  if (err) throw err;
  console.log('The file has been saved!');
});

