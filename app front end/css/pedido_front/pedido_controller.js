function iniciaPedido(){
    carregarPedido()
}

function carregarPedido() {
    listarPedido((erro, pedido) => {
        console.log(pedido);
        renderTabelaPedido(pedido);
    })
}

function carregarFormPedido(pedido){
    renderFormPedido(pedido);
}

function salvarPedido(pedido){
    if(!pedido.nr_pedido) {
        inserirPedido(pedido, (erro,pedido)=> {
            carregarPedido();
            limparCamposPedido();
        })    
    }
    else {
        atualizarPedido(pedido.nr_pedido, pedido, (erro, pedido) => {
            carregarPedido();
            limparCamposPedido();
        })
    }
}

//Eventos
function onSalvarPedido(pedido){
    console.log("Pedido: "+ pedido);
    salvarPedido(pedido);
}

function onCancelarPedido(){
    carregarPedido(); 
}

function onDeletarPedido(nr_pedido){

    deletarPedido(nr_pedido, (erro, pedido) => {
        alert(`Pedido removido com sucesso!`);
        carregarPedido();
    });
}

function onEditPedido(id){
    buscarPedido(id, (erro, pedido) => {
        carregarFormPedido(pedido);
    });
}



