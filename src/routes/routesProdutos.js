import { Router } from 'express';
import serviceProduto from '../services/servicesProdutos.js';

const router = Router();

router.get('/produtos', async (_req, res) => {
  const produtos = await serviceProduto.listarTodas();
  return res.json(produtos);
});

router.post('/produtos', async (req, res) => {
  const novoProduto = await serviceProduto.criar(req.body);
  return res.status(201).json(novoProduto);
});

export default router;