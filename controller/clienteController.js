const conexao = require('../config/conexaoBD')
const jwt = require('jsonwebtoken')
const clienteRepository = require('../repository/clienteRepository')


exports.listarCliente = (req, res) => {
    // #swagger.tags = ['default']
    // #swagger.description = 'Endpoint para listar todos os clientes.'
    clienteRepository.listarCliente((erro, clientes) => {
        if(erro){
            res.status(500).json({"erro:":"Database Error"})
            console.log(erro)
        }
        else {
            res.json(clientes)
        }
    })
}


exports.inserirCliente = (req, res) => {

    // #swagger.tags = ['default']
    // #swagger.description = 'Endpoint para cadastrar um.'

    /* #swagger.parameters['nome'] = {
            description: 'Um filtro qualquer.',
            type: 'string'
    } */

    /* #swagger.parameters['telefone'] = {
            description: 'Um filtro qualquer.',
            type: 'string'
    } */

    /* #swagger.parameters['endereco'] = {
            description: 'Um filtro qualquer.',
            type: 'string'
    } */

    /* #swagger.parameters['cpf'] = {
            description: 'Um filtro qualquer.',
            type: 'string'
    } */
 
    /* #swagger.parameters['senha'] = {
            description: 'Um filtro qualquer.',
            type: 'int'
    } */
    

    const cliente = req.query;
    //Validar os dados
    
    if (cliente.nome == "" | cliente.nome == undefined | cliente.telefone == "" | cliente.telefone ==undefined
     | cliente.endereco == "" | cliente.endereco == undefined | cliente.cpf == "" | cliente.cpf == undefined
     |cliente.senha == "" | cliente.senha == undefined){
        res.status(400).json({"Erro": "Preencher todos os campos."})
    }

    clienteRepository.inserirCliente(cliente, (erro, clienteSalvo) => {
       if(erro){
           res.status(500).json({"erro:":"Database Error"})
           console.log(erro)
       }
       else {
           res.status(201).json(clienteSalvo)
       }
   })

}

exports.buscarPorId = (req, res) => {    
    const id = +req.params.id;
    if(isNaN(id)){
        const error = {
            status: 400,
            msg: "Id deve ser um numero"
        }
        res.status(error.status).json(error)
    }
    else{
        clienteRepository.buscarPorId(id, (erro, cliente) => {
            if(erro){
                res.status(erro.status).json(erro)
            }
            else {
                res.json(cliente)
            }
        })
    }
}


exports.atualizarCliente = (req, res) => {
    const id = +req.params.id;
    const cliente = req.body
    cliente.cod_cli = id
    
    if(isNaN(id)){
        const error = {
            status: 400,
            msg: "Id deve ser um numero"
        }
        res.status(error.status).json(error)
    }
    else{
        clienteRepository.buscarPorId(id, (erro, menu) => {
            if(erro){
                res.status(erro.status).json(erro)
            }
            else {
                clienteRepository.atualizarCliente (cliente, (erro, id) => {
                    if(erro){
                        res.status(erro.status).json(erro)
                    }
                    else {
                        const msg = {
                            msg: "Cliente atualizado com sucesso."
                        }
                        res.json(msg)
                    }        
                })
            }
        })
    }
}

exports.validarCliente = (req, res) => {
    if(req.body && req.body.cpf && req.body.senha){
        const cpf = req.body.cpf;
        const senha = req.body.senha;

        clienteRepository.buscarPorCpf(cpf, (err, cliente) => {
            if(err){
                if(err.status == 404){
                    const erro = {
                        status: 401,
                        msg: "cliente invalido"
                    }
                    res.status(erro.status).json(erro);
                }
                else {
                    res.status(err.status).json(err);
                }
            }
            else {
                
                if(cliente.senha == senha){
                    const token = jwt.sign({
                        id: cliente.cod_cli,
                        nome: cliente.nome,
                        cpf: cliente.cpf
                    }, "teste", {expiresIn: "1h"});
                    res.status(201).json({"token":token});
                }
                else {
                    const erro = {
                        status: 401,
                        msg: "Senha invalida"
                    }
                    res.status(erro.status).json(erro);
                }
            }
        })
    }
    else {
        const erro = {
            status: 400,
            msg: "CPF ou senha inexistentes"
        }
        res.status(erro.status).json(erro);
    }
}


exports.validarToken = (req, res, next) => {
    const token = req.get("x-auth-token");
    if(!token){
        const error = {  
            status: 403,
            msg: "Nao tem token de acesso"
        }
        res.status(error.status).json(error);
    }
    else {
        jwt.verify(token, "teste", (err, payload) => {
            if(err){
                const error = { 
                    status: 403,
                    msg: "Token invalido"
                }
                res.status(error.status).json(error);        
            }
            else{
                console.log("Id do Cliente: "+payload.id);
                next();
            }
        })
    }
}

    