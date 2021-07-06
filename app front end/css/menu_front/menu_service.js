const URI_listar_menu = 'http://localhost:3000/api/menu/listarMenu'
const URI_deletar_menu = 'http://localhost:3000/api/menu/deletarMenu'
const URI_inserir_menu = 'http://localhost:3000/api/menu/inserirMenu'

function listarMenu(callback) {
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
    xhttp.open("GET", URI_listar_menu, true);
    xhttp.send();
}

function inserirMenu(menu, callback) {
    const xhttp = new XMLHttpRequest();   
    
    // Ajustar para receber o token para inserir
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
    xhttp.open("POST", URI_inserir_menu, true);
    xhttp.setRequestHeader("Content-Type","application/json");
    xhttp.send(JSON.stringify(menu));
    
}

function deletarMenu(cod_prod, callback) {
    // Ajustar para receber o token para deletar
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
    
    xhttp.open("DELETE", URI_deletar_menu+"/" + cod_prod, true);
    xhttp.send();

}

/*function buscarProduto(id, callback) {
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
    xhttp.open("GET", URI+"/"+id, true);
    xhttp.send();

}

function atualizarProduto(id, pedido, callback) {
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
*/