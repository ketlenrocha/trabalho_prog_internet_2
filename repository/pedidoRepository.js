const conexao = require('../config/conexaoBD')

exports.listarPedido = (callback) => {
    const sql = "SELECT * FROM pedido";

    conexao.query(sql, (erro, rows) => {
        if(erro){            
            callback(erro,null);
        }
        else {
            callback(null, rows);
        }
    })
}

exports.inserirPedido = (pedido, callback) => {   
    //SQL
    const sql = "INSERT INTO pedido (cod_cli, cod_prod, quantidade, observacoes) VALUES (?,?,?,?)" 

    conexao.query(sql, [pedido.cod_cli, pedido.cod_prod, pedido.quantidade, pedido.observacoes], (erro, rows) => {
            if(erro){
                callback(erro, null)
            }
            else {
                pedido.nr_pedido = rows.insertId;
                callback(null, pedido)
            }
    })    

}

exports.buscarPorId = (nr_pedido, callback) => {

    const sql = "SELECT * FROM pedido WHERE nr_pedido=?";

    conexao.query(sql, [nr_pedido], (err, rows) => {
        if(err){
            const error = {
                status: 500,
                msg: err
            }
            callback(error, null);
        }
        else {
            if(rows && rows.length > 0){
                callback(null,rows[0])
            }
            else{ 
                const error = {
                    status: 404,
                    msg: "Pedido nao encontrado"
                }
                callback(error, null);
            }
        }
    })
}