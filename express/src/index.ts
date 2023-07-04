import express from 'express';
import createTemplate from './create-template';

const app = express();

app.use(express.json());

const port = 3000;

app.listen(port, () => {
  console.log('Example app listening on port ' + port);
});

app.get('/', async (req, res) => {
  const result = await createTemplate();

  res.setHeader('Content-Type', 'application/pdf');
  res.setHeader('Content-Disposition', 'attachment; filename=output.pdf');

  result.pipe(res);
});
