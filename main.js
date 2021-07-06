const express = require('express')
const cors = require('cors')
const clienteController = require('./controller/clienteController')
const usuarioController = require('./controller/usuarioController')
const app = express()
const port = 3000

//Swagger
const http = require('http')
const swaggerUi = require('swagger-ui-express')
const swaggerFile = require('./swagger_output.json')

http.createServer(app).listen(8085)
app.use('/doc', swaggerUi.serve, swaggerUi.setup(swaggerFile))

app.use(cors())
app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded

//Auth CLiente
const authCliente = require('./rotas/authCliente')
app.use('/api/authCliente', authCliente)

//Auth Usuario
const authUsuario = require('./rotas/authUsuario')
app.use('/api/authUsuario', authUsuario)


//Pedido
const pedidoRotas = require('./rotas/pedidoRotas')
app.use('/api/pedido', pedidoRotas)

//Menu
const menuRotas = require('./rotas/menuRotas')
app.use('/api/menu', menuRotas)

//Usuario
const usuarioRotas = require('./rotas/usuarioRotas')
app.use('/api/usuario', usuarioRotas)

//Cliente
const clienteRotas = require('./rotas/clienteRotas')
app.use('/api/cliente', clienteRotas)

app.listen(port, () => {
  console.log(`Executando servidor em http://localhost:${port}`)
})