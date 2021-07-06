function iniciaLogin(){
    carregarFormLogin();
}

function carregarFormLogin(login){
    renderFormLogin(login);
}

function carregarFormClienteAtualizar(cliente){
    renderFormClienteAtualizar(cliente);
}

function salvarLogin(login){
    
    if(login.cpf){
        validarCliente(login, (erro,login)=> {
            alert(` Login Ok `);
            localStorage.setItem('token', login)
            limparCamposLogin();
        })    
    }
    else {
        if(login.cpf == "") return alert("Favor preencher o CPF");
        if(login.senha == "") return alert("Favor preencher a senha");
    }
}

//Eventos
function onSalvarLogin(login){
    console.log("cliente: "+ login);
    salvarLogin(login);
}

function onCancelar(){
    carregarMenu();
}

