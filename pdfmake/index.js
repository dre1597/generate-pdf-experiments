const pdfMake = require('pdfmake');
const fs = require('fs');

const fonts = {
  Helvetica: {
    normal: 'Helvetica',
    bold: 'Helvetica-Bold',
    italics: 'Helvetica-Oblique',
    bolditalics: 'Helvetica-BoldOblique'
  },
};

const printer = new pdfMake(fonts);

let helloWorldLorem = [];

for (let i = 0; i < 200000; i++) {
  helloWorldLorem.push({
    text: 'Hello World',
    style: 'header',
  });
}

const docDefinition = {
  defaultStyle: {
    font: 'Helvetica',
  },
  content: [
    ...helloWorldLorem
  ],
};

const pdf = printer.createPdfKitDocument(docDefinition, {});

pdf.pipe(fs.createWriteStream(`output.pdf`));

pdf.end();
