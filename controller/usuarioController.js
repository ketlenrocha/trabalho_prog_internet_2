const conexao = require('../config/conexaoBD')
const jwt = require('jsonwebtoken')
const usuarioRepository = require('../repository/usuarioRepository')

exports.inserirUsuario = (req, res) => {
 
    const usuario = req.body;
    //Validar os dados
    if (!usuario || !usuario.usuario || !usuario.senha){
        res.status(400).json({"Erro": "Preencher todos os campos."})
    }

    usuarioRepository.inserirUsuario(usuario, (erro, usuarioSalvo) => {
       if(erro){
           res.status(500).json({"erro:":"Database Error"})
           console.log(erro)
       }
       else {
           res.status(201).json(usuarioSalvo)
       }
   })

}

exports.validarUsuario = (req, res) => {
    if(req.body && req.body.usuario && req.body.senha){
        const user = req.body.usuario;
        const senha = req.body.senha;

        usuarioRepository.buscarUsuario(user, (err, usuario) => {
            if(err){
                if(err.status == 404){
                    const erro = {
                        status: 401,
                        msg: "usuario invalido"
                    }
                    res.status(erro.status).json(erro);
                }
                else {
                    res.status(err.status).json(err);
                }
            }
            else {
                
                if(usuario.senha == senha){
                    const token = jwt.sign({
                        id: usuario.usuario,
                        pass: usuario.senha
                    }, "12345", {expiresIn: "1h"});
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
            msg: "Usuario ou senha inexistentes"
        }
        res.status(erro.status).json(erro);
    }
}


exports.validarTokenUsuario = (req, res, next) => {
    const token = req.get("x-auth-token");
    if(!token){
        const error = {  
            status: 403,
            msg: "Nao tem token de acesso"
        }
        res.status(error.status).json(error);
    }
    else {
        jwt.verify(token, "12345", (err, payload) => {
            if(err){
                const error = { 
                    status: 403,
                    msg: "Token invalido"
                }
                res.status(error.status).json(error);        
            }
            else{
                console.log("Id do usuario: "+payload.id);
                next();
            }
        })
    }
}

    