const pool = require('../conexao');

const listarCategorias = async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM categorias');
    res.status(200).json(result.rows);
  } catch (error) {
    res.status(500).json({ message: 'Erro ao listar categorias', error });
  }
};

module.exports = {
  listarCategorias,
};