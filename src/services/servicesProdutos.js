import { pool } from "../database/db.js";

export class serviceProduto{

  async getall() {
   
      const result = await pool.query(
        'SELECT id, nome, categoria, condicao_uso, disponivel FROM equipamentos ORDER BY nome'
      )
      return result.rows
    
}
  async criar(equipamento) {
    const { nome, categoria, condicao_uso = 'Bom estado', disponivel = false } = equipamento

    const result = await pool.query(
        'INSERT INTO equipamentos (nome, categoria, condicao_uso, disponivel) VALUES ($1, $2, $3, $4) RETURNING id, nome, categoria, condicao_uso, disponivel',
        [nome, categoria, condicao_uso, disponivel]
      )
      return result.rows[0] 
  }
}

export default new EquipamentoService()