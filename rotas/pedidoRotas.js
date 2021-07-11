const express = require('express');
const rotas = express.Router();
const pedidoController = require('../controller/pedidoController')

//Pedido
rotas.post('/inserirPedido', pedidoController.inserirPedido)
rotas.get('/buscarPedido/:nr_pedido', pedidoController.buscarPedido)
rotas.get('/listarPedido', pedidoController.listarPedido)
rotas.delete('/deletarPedido/:nr_pedido', pedidoController.deletarPedido)

module.exports = rotas