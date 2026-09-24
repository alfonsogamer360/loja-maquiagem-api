import { pool } from "../database/db.js";

export class serviceProduto {
  async listarTodas() {
    const result = await pool.query('SELECT * FROM produtos');
    return result.rows;
  }

  async criar({ nome, marca, categoria, preco, quantidade_estoque }) {
    const res = await pool.query(
      'INSERT INTO produtos (nome, marca, categoria, preco, quantidade_estoque) VALUES ($1, $2, $3, $4, $5) RETURNING *',
      [nome, marca, categoria, preco, quantidade_estoque]
    );
    return res.rows[0];
  }
}

export default new serviceProduto();