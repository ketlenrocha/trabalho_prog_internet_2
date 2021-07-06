const conexao = require('../config/conexaoBD')

exports.listarMenu = (callback) => {
    const sql = "SELECT * FROM menu";

    conexao.query(sql, (erro, rows) => {
        if(erro){            
            callback(erro,null);
        }
        else {
            callback(null, rows);
        }
    })
}

exports.inserirMenu = (menu, callback) => {   
    //SQL
    const sql = "INSERT INTO menu (nome, descricao, valor, dir_img) VALUES (?,?,?,?)"

    conexao.query(sql, [menu.nome, menu.descricao, menu.valor, menu.dir_img],
        (erro, rows) => {
            if(erro){
                callback(erro, null)
            }
            else {
                menu.id = rows.insertId;
                callback(null, menu)
            }
    })    
}

exports.buscarPorId = (id, callback) => {

    const sql = "SELECT * FROM menu WHERE cod_prod=?";

    conexao.query(sql, [id], (err, rows) => {
        if(err){
            const error = {
                status: 500,
                msg: err
            }
            callback(error, null);
        }
        else {
            if(rows && rows.length > 0){
                callback(null, rows[0])
            }
            else{ 
                const error = {
                    status: 404,
                    msg: "Hamburguer nao encontrado"
                }
                callback(error, null);
            }
        }
    })
}

exports.deletar = (id, callback) => {
    const sql = `DELETE FROM menu WHERE cod_prod=?`;
    conexao.query(sql, [id], (err, rows) => {
        if(err){
            const error = {
                status: 500,
                msg: err
            }
            callback(err, null);
        }
        else {
            if(rows.affectedRows){
                callback(null, id);
            }
            else {
                const error = {
                    status: 500,
                    msg: err
                }
                callback(err, null); 
            }
        }
    })            
}