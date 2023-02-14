import express from 'express';
import utils from '@js-monorepo/utils';

const port = process.env.PORT ? Number(process.env.PORT) : 3000;

const app = express();

app.get('/', (req, res) => {
  res.send({ message: 'Hello NodeJS API' + " " + utils.name });
});

app.listen(port, () => {
  console.log(`[ ready ] http://localhost:${port}`);
});
