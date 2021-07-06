function iniciaCliente(){
    carregarCliente()
}

function carregarCliente() {
    listarCliente((erro, cliente) => {
        console.log(cliente);
        renderTabelaCliente(cliente);
    })
}

function carregarFormCliente(cliente){
    renderFormCliente(cliente);
}

function carregarFormClienteAtualizar(cliente){
    renderFormClienteAtualizar(cliente);
}

function salvarCliente(cliente){
    
    if(!cliente.cod_cli) {
        if(cliente.nome == "") return alert("Favor preencher o nome");
        if(cliente.telefone == "") return alert("Favor preencher o telefone");
        if(cliente.endereco == "") return alert("Favor preencher o endereço");
        if(cliente.cpf == "") return alert("Favor preencher o CPF");
        if(cliente.senha == "") return alert("Favor preencher a senha");

        inserirCliente(cliente, (erro,cliente)=> {
            carregarCliente();
            limparCamposInserir();
        })    
    }
    else {
        if(cliente.telefone == "") return alert("Favor preencher o telefone");
        if(cliente.endereco == "") return alert("Favor preencher o endereço");
        if(cliente.senha == "") return alert("Favor preencher a senha");
        
        atualizarCliente(cliente.cod_cli, cliente, (erro, cliente) => {
            carregarCliente();
            limparCamposAtualizar();
        })
    }
}

//Eventos
function onSalvarCliente(cliente){
    console.log("cliente: "+ cliente);
    salvarCliente(cliente);
}

function onCancelar(){
    carregarCliente();
}


function onEdit(id){

    buscarPorId(id, (erro, cliente) => {
        carregarFormClienteAtualizar(cliente);
    });
}




