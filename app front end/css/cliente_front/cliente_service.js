const URI_listar_cliente = 'http://localhost:3000/api/cliente/listarCliente'
const URI_atualizar_cliente = 'http://localhost:3000/api/cliente/atualizarCliente'
const URI_inserir_cliente = 'http://localhost:3000/api/cliente/inserirCliente'


function listarCliente(callback) {
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
    xhttp.open("GET", URI_listar_cliente, true);
    xhttp.send();
}

function inserirCliente(cliente, callback) {
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

    
    
    const inserir = '?nome=' + cliente.nome + '&telefone=' + cliente.telefone + '&endereco=' + cliente.endereco
        + '&cpf=' + cliente.cpf + '&senha=' + cliente.senha

    const URI_final = URI_inserir_cliente + inserir
    
    xhttp.open("POST", URI_final, true);

    xhttp.send()
    
    
}

function buscarPorId(cod_cli, callback) {
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
    xhttp.open("GET", URI_listar_cliente + "/" + cod_cli, true);
    xhttp.send();

}

function atualizarCliente(id, cliente, callback) {
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

    xhttp.open("PUT", URI_atualizar_cliente+ "/" + id, true);
    xhttp.setRequestHeader("Content-Type","application/json");
    localStorage.getItem('token')
    const token  = localStorage.getItem('token')
    

    xhttp.setRequestHeader("x-auth-token", localStorage.getItem('token'))
    xhttp.send(JSON.stringify(cliente));

}
