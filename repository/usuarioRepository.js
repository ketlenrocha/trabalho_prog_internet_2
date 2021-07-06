const conexao = require('../config/conexaoBD')


exports.buscarUsuario = (username, callback) => {
    const sql = "SELECT * FROM usuario where usuario=?";
    conexao.query(sql, [username], (err, rows) => {
        if(err){            
            const error = {
                status: 500,
                msg: err
            }
            callback(error,null);
        }
        else {
            if(rows && rows.length > 0){
                callback(null,rows[0]);
            }
            else{ 
                const error = {
                    status: 404,
                    msg: "usuario nao encontrado"
                }
                callback(error,null);
            }
        }
    })

}

exports.inserirUsuario = (usuario, callback) => {   
    //SQL
    const sql = "INSERT INTO usuario (usuario, senha) VALUES (?,?)"
    
    conexao.query(sql, [usuario.usuario, usuario.senha],
        (erro, rows) => {
            if(erro){
                callback(erro, null)
            }
            else {
                usuario.id = rows.insertId;
                callback(null, usuario)
            }
    })    
} 