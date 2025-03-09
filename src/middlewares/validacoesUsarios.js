const validarEmail = (req, res, next) => {
  const { email } = req.body;

  if (!email || !email.includes('@')) {
    return res.status(400).json({ mensagem: 'E-mail inválido' });
  }

  next();
};

const validarEmailSenha = (req, res, next) => {
  const { email, senha } = req.body;

  if (!email || !senha) {
    return res.status(400).json({ mensagem: 'E-mail e senha são obrigatórios' });
  }

  next();
};

module.exports = {
  validarEmail,
  validarEmailSenha,
};
