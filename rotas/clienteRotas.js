const express = require('express');
const rotas = express.Router();
const clienteController = require('../controller/clienteController')


//Cliente
rotas.get('/listarCliente', clienteController.listarCliente)
rotas.get('/listarCliente/:id', clienteController.buscarPorId)
rotas.post('/inserirCliente', clienteController.inserirCliente)
//rotas.put('/atualizarCliente/:id', clienteController.atualizarCliente)
rotas.put('/atualizarCliente/:id', clienteController.validarToken, clienteController.atualizarCliente)

module.exports = rotas