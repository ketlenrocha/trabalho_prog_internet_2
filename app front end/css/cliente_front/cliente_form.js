
function renderFormCliente(cliente) {
    
    if(!cliente) {
        cliente = {};
    }
    
    var str = `
    <h2>Formulario de cliente</h2>
    <form id="formularioCliente">
        <label for="txtnome">Nome:</label>
        <input type="text" id="txtnome" value="${cliente.nome ?cliente.nome : ''}">
        <br />
        <label for="txttel">Telefone:</label>
        <input type="text" id="txttel" value="${cliente.telefone ?cliente.telefone : ''}">
        <br />
        <label for="txtendereco">Endereço:</label>
        <input type="text" id="txtendereco" value="${cliente.endereco ?cliente.endereco : ''}">
        <br />
        <label for="txtcpf">CPF:</label>
        <input type="text" id="txtcpf" value="${cliente.cpf ?cliente.cpf : ''}">
        <br />
        <label for="txtsenha">Senha:</label>
        <input type="text" id="txtsenha" value="${cliente.senha ?cliente.senha : ''}">
        <br />

        <br />
        <input type="submit" id="btnsalvarcliente" value="Salvar">
        <input type="reset" value="Cancelar">
        <br />
    </form>
    `;

    let containerForm = document.querySelector("main");
    containerForm.innerHTML = str;

    var form = document.querySelector("#formularioCliente");

    form.onsubmit = function(event){
        event.preventDefault();
        onSalvarCliente(getDataClienteInserir(cliente));            
    }

    form.onreset = function(event){
        event.preventDefault();
        onCancelar();
    }
    
}

function renderFormClienteAtualizar(cliente) {
    //Se produto estiver indefinido, cria novo produto.
    if(!cliente) {
        cliente = {};
    }
    
    var str = `
    <h2>Formulario de cliente</h2>
    <form id="formularioCliente">
        <label for="txttel">Telefone:</label>
        <input type="text" id="txttel" value="${cliente.telefone ?cliente.telefone : ''}">
        <br />
        <label for="txtendereco">Endereço:</label>
        <input type="text" id="txtendereco" value="${cliente.endereco ?cliente.endereco : ''}">
        <br />
        <label for="txtsenha">Senha:</label>
        <input type="text" id="txtsenha" value="${cliente.senha ?cliente.senha : ''}">
        <br />

        <br />
        <input type="submit" id="btnsalvarcliente" value="Salvar">
        <input type="reset" value="Cancelar">
        <br />
    </form>
    `;

    let containerForm = document.querySelector("main");
    containerForm.innerHTML = str;

    var form = document.querySelector("#formularioCliente");

    form.onsubmit = function(event){
        event.preventDefault();
        onSalvarCliente(getDataCliente(cliente));            
    }

    form.onreset = function(event){
        event.preventDefault();
        onCancelar();
    }
    
}

function getDataCliente(cliente){
    cliente.telefone = document.querySelector("#txttel").value;
    cliente.endereco = document.querySelector("#txtendereco").value;
    cliente.senha = document.querySelector("#txtsenha").value;
    return cliente;
}

function getDataClienteInserir(cliente){
    cliente.nome = document.querySelector("#txtnome").value;
    cliente.telefone = document.querySelector("#txttel").value;
    cliente.endereco = document.querySelector("#txtendereco").value;
    cliente.cpf = document.querySelector("#txtcpf").value;
    cliente.senha = document.querySelector("#txtsenha").value;
    return cliente;
}

function limparCamposAtualizar(){
    document.querySelector("#txttel").value="";
    document.querySelector("#txtendereco").value="";
    document.querySelector("#txtsenha").value="";
}

function limparCamposInserir(){
    document.querySelector("#txtnome").value="";
    document.querySelector("#txttel").value="";
    document.querySelector("#txtendereco").value="";
    document.querySelector("#txtcpf").value="";
    document.querySelector("#txtsenha").value="";
}

