const pool = require('../conexao');

const listarTransacoes = async (req, res) => {
  try {
    const { rows } = await pool.query('SELECT * FROM transacoes WHERE usuario_id = $1', [req.userId]);
    return res.status(200).json(rows);
  } catch (error) {
    return res.status(500).json({ mensagem: 'Erro ao listar transações.' });
  }
};

const detalharTransacao = async (req, res) => {
  const { id } = req.params;

  try {
    const { rows } = await pool.query('SELECT * FROM transacoes WHERE id = $1 AND usuario_id = $2', [id, req.userId]);

    if (rows.length === 0) {
      return res.status(404).json({ mensagem: 'Transação não encontrada.' });
    }

    return res.status(200).json(rows[0]);
  } catch (error) {
    return res.status(500).json({ mensagem: 'Erro ao buscar transação.' });
  }
};

const cadastrarTransacao = async (req, res) => {
  const { descricao, valor, data, categoria_id, tipo } = req.body;

  if (!descricao || !valor || !data || !categoria_id || !tipo) {
    return res.status(400).json({ mensagem: 'Todos os campos obrigatórios devem ser informados.' });
  }

  if (tipo !== 'entrada' && tipo !== 'saida') {
    return res.status(400).json({ mensagem: 'O tipo da transação deve ser "entrada" ou "saida".' });
  }

  try {
    const categoriaExistente = await pool.query('SELECT * FROM categorias WHERE id = $1', [categoria_id]);

    if (categoriaExistente.rowCount === 0) {
      return res.status(400).json({ mensagem: 'Categoria não encontrada.' });
    }

    const { rows } = await pool.query(
      'INSERT INTO transacoes (descricao, valor, data, categoria_id, tipo, usuario_id) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *',
      [descricao, valor, data, categoria_id, tipo, req.userId]
    );

    return res.status(201).json(rows[0]);
  } catch (error) {
    return res.status(500).json({ mensagem: 'Erro ao cadastrar transação.' });
  }
};

const atualizarTransacao = async (req, res) => {
  const { id } = req.params;
  const { descricao, valor, data, categoria_id, tipo } = req.body;

  if (!descricao || !valor || !data || !categoria_id || !tipo) {
    return res.status(400).json({ mensagem: 'Todos os campos obrigatórios devem ser informados.' });
  }

  if (tipo !== 'entrada' && tipo !== 'saida') {
    return res.status(400).json({ mensagem: 'O tipo da transação deve ser "entrada" ou "saida".' });
  }

  try {
    const transacaoExistente = await pool.query('SELECT * FROM transacoes WHERE id = $1 AND usuario_id = $2', [id, req.userId]);

    if (transacaoExistente.rowCount === 0) {
      return res.status(404).json({ mensagem: 'Transação não encontrada.' });
    }

    const categoriaExistente = await pool.query('SELECT * FROM categorias WHERE id = $1', [categoria_id]);

    if (categoriaExistente.rowCount === 0) {
      return res.status(400).json({ mensagem: 'Categoria não encontrada.' });
    }

    await pool.query(
      'UPDATE transacoes SET descricao = $1, valor = $2, data = $3, categoria_id = $4, tipo = $5 WHERE id = $6 AND usuario_id = $7',
      [descricao, valor, data, categoria_id, tipo, id, req.userId]
    );

    return res.status(204).send();
  } catch (error) {
    return res.status(500).json({ mensagem: 'Erro ao atualizar transação.' });
  }
};

const removerTransacao = async (req, res) => {
  const { id } = req.params;

  try {
    const transacaoExistente = await pool.query('SELECT * FROM transacoes WHERE id = $1 AND usuario_id = $2', [id, req.userId]);

    if (transacaoExistente.rowCount === 0) {
      return res.status(404).json({ mensagem: 'Transação não encontrada.' });
    }

    await pool.query('DELETE FROM transacoes WHERE id = $1 AND usuario_id = $2', [id, req.userId]);

    return res.status(204).send();
  } catch (error) {
    return res.status(500).json({ mensagem: 'Erro ao remover transação.' });
  }
};

const obterExtrato = async (req, res) => {
  try {
    const { rows } = await pool.query('SELECT * FROM transacoes WHERE usuario_id = $1', [req.userId]);

    return res.status(200).json(rows);
  } catch (error) {
    return res.status(500).json({ mensagem: 'Erro ao obter extrato de transações.' });
  }
};

module.exports = {
  listarTransacoes,
  detalharTransacao,
  cadastrarTransacao,
  atualizarTransacao,
  removerTransacao,
  obterExtrato,
};
