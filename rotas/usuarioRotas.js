const express = require('express');
const rotas = express.Router();
const usuarioController = require('../controller/usuarioController')

//Pedido
rotas.post('/inserirUsuario', usuarioController.inserirUsuario)

module.exports = rotas