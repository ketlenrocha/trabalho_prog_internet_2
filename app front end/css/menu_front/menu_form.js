
function renderFormMenu(menu) {
    
    if(!menu) {
        menu = {};
    }
    
    var str = `
    <h2>Formulario de Menu</h2>
    <form id="formularioMenu">
        <label for="txtnome">Nome:</label>
        <input type="text" id="txtnome" value="${menu.nome ?menu.nome : ''}">
        <br />
        <label for="txtdesc">Descricao:</label>
        <input type="text" id="txtdesc" value="${menu.descricao ?menu.descricao : ''}">
        <br />
        <label for="txtvalor">Valor:</label>
        <input type="text" id="txtvalor" value="${menu.valor ?menu.valor : ''}">
        <br />
        <label for="txtvalor">Imagem(nome da imagem):</label>
        <input type="text" id="txtimg" value="${menu.dir_img ?menu.dir_img : ''}">
        <br />
        <br />
        <input type="submit" id="btnsalvarmenu" value="Salvar">
        <input type="reset" value="Cancelar">
        <br />
    </form>
    `;

    let containerForm = document.querySelector("main");
    containerForm.innerHTML = str;

    var form = document.querySelector("#formularioMenu");

    form.onsubmit = function(event){
        event.preventDefault();
        onSalvarMenu(getDataMenu(menu));            
    }

    form.onreset = function(event){
        event.preventDefault();
        onCancelar();
    }
    
}

function getDataMenu(menu){
    menu.nome = document.querySelector("#txtnome").value;
    menu.descricao = document.querySelector("#txtdesc").value;
    menu.valor = document.querySelector("#txtvalor").value;
    menu.dir_img = document.querySelector("#txtimg").value;
    return menu;
}

function limparCamposMenu(){
    document.querySelector("#txtnome").value="";
    document.querySelector("#txtdesc").value="";
    document.querySelector("#txtvalor").value="";
    document.querySelector("#txtimg").value="";
}

