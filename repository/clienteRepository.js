const conexao = require('../config/conexaoBD')

exports.listarCliente = (callback) => {
    const sql = "SELECT * FROM cliente";

    conexao.query(sql, (erro, rows) => {
        if(erro){            
            callback(erro,null);
        }
        else {
            callback(null, rows);
        }
    })
}


exports.inserirCliente = (cliente, callback) => {   
    //SQL
    const sql = "INSERT INTO cliente (nome, telefone, endereco, cpf, senha) VALUES (?,?,?,?,?)"
    
    conexao.query(sql, [cliente.nome, cliente.telefone, cliente.endereco, cliente.cpf, cliente.senha],
        (erro, rows) => {
            if(erro){
                callback(erro, null)
            }
            else {
                cliente.cod_cli = rows.insertId;
                callback(null, cliente)
            }
    })    
}  

exports.atualizarCliente = (cliente, callback) => {
    
    const sql = "UPDATE cliente SET telefone=?, endereco=?, senha=? WHERE cod_cli=?"
    
    conexao.query(sql, [cliente.telefone, cliente.endereco, cliente.senha, cliente.cod_cli], (erro, rows) => {
        if(erro){            
            callback(erro,null);
        }
        else {
            if (rows && rows.affectedRows > 0){
                
                const msg = {
                    msg: "cliente atualizado com sucesso."
                }
                callback(erro, cliente);
            }
            else{
                callback(erro, null)
            }                          
        }
    })
}

exports.buscarPorId = (cod_cli, callback) => {
    
    const sql = "SELECT * FROM cliente WHERE cod_cli=?";

    conexao.query(sql, [cod_cli], (err, rows) => {
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
                    msg: "Cliente nao encontrado"
                }
                callback(error, null);
            }
        }
    })
}

exports.buscarPorCpf = (cpf, callback) => {
    console.log(cpf)
    const sql = "SELECT * FROM cliente where cpf=?";
    conexao.query(sql, [cpf], (err, rows) => {
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
                    msg: "Cliente nao encontrado"
                }
                callback(error,null);
            }
        }
    })

}