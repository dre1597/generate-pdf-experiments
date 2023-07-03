'use strict';

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URL's and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route');
const PDFDocument = require('pdfkit');
const fs = require('fs');

Route.on('/').render('welcome');

Route.get('/pdf', async ({ response }) => {


  const doc = new PDFDocument({ size: `A4` });

  doc.pipe(fs.createWriteStream('output.pdf'));

  doc.image(`${__dirname}/../public/capa.png`, 0, 0, { fit: [595.28, 841.89] });

  doc
    .addPage()
    .lineWidth(25)
    .lineCap('round')
    .moveTo(50, 20)
    .lineTo(530, 20)
    .stroke()
    .fillColor('white')
    .text('Hello world', 50, 20);

  doc.end();
});
