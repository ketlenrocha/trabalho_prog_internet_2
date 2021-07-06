const express = require('express');
const rotas = express.Router();
const clienteController = require('../controller/clienteController')

rotas.post('/', clienteController.validarCliente)

module.exports = rotas
