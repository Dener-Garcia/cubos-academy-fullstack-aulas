const pool = require('../conexao');
const jwt = require('jsonwebtoken');
const { jwtSecret } = require('../configs');

const validarToken = async (req, res, next) => {
  try {
    const { authorization } = req.headers;

    if (!authorization) {
      return res.status(401).json({ mensagem: 'Para acessar este recurso, um token de autenticação válido deve ser enviado.' });
    }

    const token = authorization.split(' ')[1];

    const { id } = jwt.verify(token, jwtSecret);

    const usuarioEncontrado = await pool.query(`SELECT * FROM usuarios WHERE id = $1`, [id]);

    if (usuarioEncontrado.rows.length === 0) {
      return res.status(401).json({ mensagem: 'Acesso não autorizado!' });
    }

    req.usuario = usuarioEncontrado.rows[0];

    next();
  } catch (error) {
    if (error.message === 'jwt expired' || error.message === 'invalid token' || error.message === 'invalid signature') {
      return res.status(401).json({ mensagem: 'Autenticação falhou. Verifique as credenciais e tente novamente!' });
    }

    return res.status(500).json({ mensagem: 'Erro interno do servidor.' });
  }
};

module.exports = validarToken;