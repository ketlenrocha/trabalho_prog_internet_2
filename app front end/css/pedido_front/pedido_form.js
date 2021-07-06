
function renderFormPedido(pedido) {
    
    if(!pedido) {
        pedido = {};
    }
    
    var str = `
    <h2>Formulario de Pedidos</h2>
    <form id="formularioPedido">
        <label for="txtnome">Produto:</label>
        <input type="text" id="txtnome" value="${pedido.cod_prod ?pedido.cod_prod : ''}">
        <br />
        <label for="txtuso">Cliente:</label>
        <input type="text" id="txtcli" value="${pedido.cod_cli ?pedido.cod_cli : ''}">
        <br />
        <label for="txtnome">Quantidade:</label>
        <input type="text" id="txtqtd" value="${pedido.quantidade ?pedido.quantidade : ''}">
        <br />
        <label for="txtnome">Observações:</label>
        <input type="text" id="txtobs" value="${pedido.observacoes ?pedido.observacoes : ''}">
        <br />
        <br />
        <input type="submit" id="btnsalvar" value="Salvar">
        <input type="reset" value="Cancelar">
        <br />
    </form>
    `;

    let containerForm = document.querySelector("main");
    containerForm.innerHTML = str;

    var form = document.querySelector("#formularioPedido");

    form.onsubmit = function(event){
        event.preventDefault();
        onSalvarPedido(getDataPedido(pedido));            
    }

    form.onreset = function(event){
        event.preventDefault();
        onCancelarPedido();
    }
    
}

function getDataPedido(pedido){
    pedido.nome = document.querySelector("#txtnome").value;
    pedido.cod_cli = document.querySelector("#txtcli").value;
    pedido.quantidade = document.querySelector("#txtqtd").value;
    pedido.observacoes = document.querySelector("#txtobs").value;
    return pedido;
}

function limparCamposPedido(){
    document.querySelector("#txtnome").value="";
    document.querySelector("#txtcli").value="";
    document.querySelector("#txtqtd").value="";
    document.querySelector("#txtobs").value="";
}

