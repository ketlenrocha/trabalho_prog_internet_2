const URI = "http://localhost:3000/api/pedido";
const URI_listar = 'http://localhost:3000/api/pedido/listarPedido'
const URI_buscar = 'http://localhost:3000/api/pedido/buscarPedido'
const URI_inserir = 'http://localhost:3000/api/pedido/inserirPedido'
const URI_deletar = 'http://localhost:3000/api/pedido/deletarPedido'

function listarPedido(callback) {
    const xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState === 4) {
            if(this.status === 200) {
                try {
                    callback(null, JSON.parse(this.responseText));
                } catch(msg){
                    const erro = {
                        status: 0,
                        msg: msg
                    }    
                    callback(erro, null);
                }
            }
            else {
                const erro = {
                    status: this.status,
                    msg: this.responseText
                }
                callback(erro, null);
            }
        }
    };
    xhttp.open("GET", URI_listar, true);
    xhttp.send();
}

function inserirPedido(pedido, callback) {
    const xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState === 4) {
            if(this.status === 201) {
                console.log(this.responseText) 
                callback(null, this.responseText)
            }
            else {
                const erro = {
                    status: this.status,
                    msg: this.responseText
                }
                callback(erro, null);
            }
        }
    };
    //Montar junto com a URI
    //?cod_cli=2&cod_prod=27&quantidade=1&observacoes=sem maionese' 
    
    const url_pedido = '?cod_cli=' + pedido.cod_cli + '&cod_prod=' + pedido.cod_prod + 
    '&quantidade=' + pedido.quantidade + '&observacoes=' + pedido.observacoes

    const uri_final = URI_inserir + url_pedido
    xhttp.open("POST", uri_final, true);
   // xhttp.setRequestHeader("Content-Type","application/json");
    xhttp.send();
}

function deletarPedido(id, callback) {
    const xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState === 4) {
            if(this.status === 200) {
                try {
                    callback(null, JSON.parse(this.responseText));
                } catch(msg){
                    const erro = {
                        status: 0,
                        msg: msg
                    }    
                    callback(erro, null);
                }
            }
            else {
                const erro = {
                    status: this.status,
                    msg: this.responseText
                }
                callback(erro, null);
            }
        }
    };
    xhttp.open("DELETE", URI_deletar + "/" + id, true);
    xhttp.send();

}

function buscarPedido(id, callback) {
    
    const xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState === 4) {
            if(this.status === 200) {
                try {
                    callback(null, JSON.parse(this.responseText));
                } catch(msg){
                    const erro = {
                        status: 0,
                        msg: msg
                    }
                    console.log(erro.msg);    
                    callback(erro, null);
                }
            }
            else {
                const erro = {
                    status: this.status,
                    msg: this.responseText
                }
                callback(erro, null);
            }
        }
    };
    xhttp.open("GET", URI_buscar + "/" + id, true);
    xhttp.send();

}

function atualizarPedido(id, pedido, callback) {
    const xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState === 4) {
            if(this.status === 200) {
                console.log(this.responseText) 
                callback(null, this.responseText)
            }
            else {
                const erro = {
                    status: this.status,
                    msg: this.responseText
                }
                callback(erro, null);
            }
        }
    };
    xhttp.open("PUT", URI+"/"+id, true);
    xhttp.setRequestHeader("Content-Type","application/json");
    xhttp.send(JSON.stringify(pedido));
}
