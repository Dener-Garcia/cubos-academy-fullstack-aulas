const pool = require('../conexao');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const config = require('../configs');

const cadastrarUsuario = async (req, res) => {
  const { nome, email, senha } = req.body;

  if (!nome || !email || !senha) {
    return res.status(400).json({ mensagem: 'Todos os campos obrigatórios devem ser informados.' });
  }

  try {
    const usuarioExistente = await pool.query('SELECT * FROM usuarios WHERE email = $1', [email]);

    if (usuarioExistente.rowCount > 0) {
      return res.status(400).json({ mensagem: 'Já existe usuário cadastrado com o e-mail informado.' });
    }

    const senhaCriptografada = await bcrypt.hash(senha, 10);
    const { rows } = await pool.query(
      'INSERT INTO usuarios (nome, email, senha) VALUES ($1, $2, $3) RETURNING id, nome, email',
      [nome, email, senhaCriptografada]
    );

    return res.status(201).json(rows[0]);
  } catch (error) {
    return res.status(500).json({ mensagem: 'Erro ao cadastrar usuário.' });
  }
};

const login = async (req, res) => {
  const { email, senha } = req.body;

  if (!email || !senha) {
    return res.status(400).json({ mensagem: 'Todos os campos obrigatórios devem ser informados.' });
  }

  try {
    const { rows } = await pool.query('SELECT * FROM usuarios WHERE email = $1', [email]);

    if (rows.length === 0) {
      return res.status(400).json({ mensagem: 'Usuário e/ou senha inválido(s).' });
    }

    const usuario = rows[0];

    const senhaValida = await bcrypt.compare(senha, usuario.senha);

    if (!senhaValida) {
      return res.status(400).json({ mensagem: 'Usuário e/ou senha inválido(s).' });
    }

    const token = jwt.sign({ id: usuario.id }, config.jwtSecret, { expiresIn: '8h' });

    return res.status(200).json({ usuario: { id: usuario.id, nome: usuario.nome, email: usuario.email }, token });
  } catch (error) {
    return res.status(500).json({ mensagem: 'Erro ao realizar login.' });
  }
};


const detalharUsuario = async (req, res) => {
  try {
    const { rows } = await pool.query('SELECT id, nome, email FROM usuarios WHERE id = $1', [req.userId]);

    if (rows.length === 0) {
      return res.status(404).json({ mensagem: 'Usuário não encontrado.' });
    }

    return res.status(200).json(rows[0]);
  } catch (error) {
    return res.status(500).json({ mensagem: 'Erro ao buscar usuário.' });
  }
};


const atualizarUsuario = async (req, res) => {
  const { nome, email, senha } = req.body;

  if (!nome || !email || !senha) {
    return res.status(400).json({ mensagem: 'Todos os campos obrigatórios devem ser informados.' });
  }

  try {
    const usuarioExistente = await pool.query('SELECT * FROM usuarios WHERE email = $1 AND id != $2', [email, req.userId]);

    if (usuarioExistente.rowCount > 0) {
      return res.status(400).json({ mensagem: 'O e-mail informado já está sendo utilizado por outro usuário.' });
    }

    const senhaCriptografada = await bcrypt.hash(senha, 10);
    await pool.query(
      'UPDATE usuarios SET nome = $1, email = $2, senha = $3 WHERE id = $4',
      [nome, email, senhaCriptografada, req.userId]
    );

    return res.status(204).send();
  } catch (error) {
    return res.status(500).json({ mensagem: 'Erro ao atualizar usuário.' });
  }
};

module.exports = {
  cadastrarUsuario,
  login,
  detalharUsuario,
  atualizarUsuario,
};