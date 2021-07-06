
function renderFormLogin(login) {
    //Se produto estiver indefinido, cria novo produto.
    if(!login) {
        login = {};
    }
    
    var str = `
    <h2>Login de acesso</h2>
    <form id="formularioLogin">
        <label for="txtnome">CPF:</label>
        <input type="text" id="txtcpf" value="${login.cpf ?login.cpf : ''}">
      
        <label for="txttel">Senha:</label>
        <input type="text" id="txtsenha" value="${login.senha ?login.senha : ''}">
       

        <br/>
        <input type="submit" id="btnsalvarcliente" value="Salvar">
        <input type="reset" value="Cancelar">
        <br />
    </form>
    `;

    let containerForm = document.querySelector("main");
    containerForm.innerHTML = str;

    var form = document.querySelector("#formularioLogin");

    form.onsubmit = function(event){
        event.preventDefault();
        onSalvarLogin(getDataLogin(login));            
    }

    form.onreset = function(event){
        event.preventDefault();
        onCancelar();
    }
    
}


function getDataLogin(login){
    login.cpf = document.querySelector("#txtcpf").value;
    login.senha = document.querySelector("#txtsenha").value;
    return login;
}

function limparCamposLogin(){
    document.querySelector("#txtcpf").value="";
    document.querySelector("#txtsenha").value="";
}

