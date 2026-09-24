import express from 'express';
import routesProdutos from './routes/routesProdutos.js';

const app = express();

app.use(express.json());
app.use("/", routesProdutos);

app.listen(3000, () => {
  console.log('API rodando em http://localhost:3000');
});