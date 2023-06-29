const htmlToPDF = require('html-pdf');
const fs = require('fs');

const options = {
  type: 'pdf',
  format: 'A4',
  orientation: 'portrait',
};

let file = fs.readFileSync(__dirname + '/index.html', 'utf8').toString();

for (let i = 0; i < 20000; i++) {
  file += '<p>Hello World</p>';
}

htmlToPDF.create(file, options).toFile('./output.pdf', (err, res) => {
  if (err) throw err;
});

