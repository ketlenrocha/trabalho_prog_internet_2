const conexao = require('../config/conexaoBD')
const menuRepository = require('../repository/menuRepository')

exports.listarMenu = (req, res) => {
    menuRepository.listarMenu((erro, produtos) => {
        if(erro){
            res.status(500).json({"erro:":"Database Error"})
            console.log(erro)
        }
        else {
            res.json(produtos)
        }
    })
}


exports.inserirMenu = (req, res) => {
 
     //Obter o dado do request nome e o preco
     const menu = req.body;
     //Validar os dados
     if (!menu || !menu.nome || !menu.descricao || !menu.valor || !menu.dir_img){
         res.status(400).json({"Erro": "Preencher todos os campos."})
     }
 

     menuRepository.inserirMenu(menu, (erro, menuSalvo) => {
        if(erro){
            res.status(500).json({"erro:":"Database Error"})
            console.log(erro)
        }
        else {
            res.status(201).json(menuSalvo)
        }
    })
 
 }

 
exports.deletarMenu = (req, res) => {
    const id = +req.params.id;
    if(isNaN(id)){
        const error = {
            status: 400,
            msg: "Id deve ser um numero"
        }
        res.status(error.status).json(error)
    }
    else{
        menuRepository.buscarPorId(id, (erro, menu) => {
            if(erro){
                res.status(erro.status).json(erro)
            }
            else {
                menuRepository.deletar (id, (erro, id) => {
                    if(erro){
                        res.status(erro.status).json(erro)
                    }
                    else {
                        const msg = {
                            msg: "Hamburguer deletado com sucesso."
                        }
                        res.json(msg)
                    }        
                })
            }
        })
    }
}