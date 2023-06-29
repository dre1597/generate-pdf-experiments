const htmlToPDF = require('html-pdf');
const fs = require('fs');

const options = {
  type: 'pdf',
  format: 'A4',
  orientation: 'portrait',
};

const file = fs.readFileSync(`./index.html`, 'utf8').toString();

htmlToPDF.create(file, options).toFile('./output.pdf', (err, res) => {
  if (err) throw err;
});

