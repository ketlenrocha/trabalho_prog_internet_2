const conexao = require('../config/conexaoBD')
const pedidoRepository = require('../repository/pedidoRepository')

exports.listarPedido = (req, res) => {
    pedidoRepository.listarPedido((erro, pedido) => {
        if(erro){
            res.status(500).json({"erro:":"Database Error"})
            console.log(erro)
        }
        else {
            res.json(pedido)
        }
    })
}

exports.inserirPedido= (req, res) => {

    // #swagger.tags = ['default']
    // #swagger.description = 'Endpoint para cadastrar um.'

    /* #swagger.parameters['cod_cli'] = {
            description: 'Um filtro qualquer.',
            type: 'string'
    } */

    /* #swagger.parameters['cod_prod'] = {
            description: 'Um filtro qualquer.',
            type: 'string'
    } */

    /* #swagger.parameters['quantidade'] = {
            description: 'Um filtro qualquer.',
            type: 'int'
    } */

    /* #swagger.parameters['observacoes'] = {
            description: 'Um filtro qualquer.',
            type: 'string'
    } */
 
 
    //Obter o dado do request nome e o preco
    const pedido = req.query;
    console.log(pedido)
    //Validar os dados
    if (pedido.cod_cli == undefined | pedido.cod_cli =="" | pedido.cod_prod == undefined | pedido.cod_prod == "" |
    pedido.quantidade == undefined | pedido.quantidade == "" ){
        res.status(400).json({"Erro": "Preencher todos os campos."})
    }

    pedidoRepository.inserirPedido(pedido, (erro, pedidoSalvo) => {
       if(erro){
           res.status(500).json({"erro:":"Database Error"})
           console.log(erro)
       }
       else {
           res.status(201).json(pedidoSalvo)
       }
   })

}

exports.buscarPedido = (req, res) => {
    const nr_pedido = +req.params.nr_pedido;

    if(isNaN(nr_pedido)){
        const error = {
            status: 400,
            msg: "nr_pedido deve ser um numero"
        }
        res.status(error.status).json(error)
    }
    else{
        pedidoRepository.buscarPorId(nr_pedido, (erro, pedido) => {
            if(erro){
                res.status(erro.status).json(erro)
            }
            else {
                res.json(pedido)
            }
        })
    }
}