const express = require('express');
const { validarEmail, validarEmailSenha } = require('./middlewares/validacoesUsuarios');
const autenticarLogin = require('./middlewares/autenticacaoLogin');
const { validarCamposTransacao } = require('./middlewares/validacaoTransacoes');

const rotas = express();

const { cadastrarUsuario, loginUsuario, detalharUsuario, atualizarUsuario } = require('./controllers/usuarioController');
rotas.post('/usuario', validarEmail, cadastrarUsuario);
rotas.post('/login', validarEmailSenha, loginUsuario);
rotas.use(autenticarLogin);
rotas.get('/usuario', detalharUsuario);
rotas.put('/usuario', validarEmail, atualizarUsuario);

const { listarCategorias } = require('./controllers/categoriaController');
rotas.get('/categoria', listarCategorias);

const { listarTransacoes, detalharTransacao, cadastrarTransacao, atualizarTransacao, removerTransacao, obterExtrato} = require('./controllers/transacaoController');
rotas.get('/transacao', listarTransacoes);
rotas.get('/transacao/:id', detalharTransacao);
rotas.post('/transacao', validarCamposTransacao, cadastrarTransacao);
rotas.put('/transacao/:id', validarCamposTransacao, atualizarTransacao);
rotas.delete('/transacao/:id', removerTransacao);
rotas.get('/extrato', obterExtrato);

module.exports = rotas;