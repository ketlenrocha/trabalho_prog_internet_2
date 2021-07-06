function iniciaMenu(){
    carregarMenu()
}

function carregarMenu() {
    listarMenu((erro, menu) => {
        console.log(menu);
        renderTabelaMenu(menu);
    })
}

function carregarFormMenu(menu){
    renderFormMenu(menu);
}

function salvarMenu(menu){
    
    if(!menu.id) {
        if(menu.nome == "") return alert("Favor preencher o nome");
        if(menu.descricao == "") return alert("Favor preencher a descrição");
        if(menu.valor == "") return alert("Favor preencher o valor");
        if(menu.dir_img == "") return alert("Favor preencher o nome da imagem");

        inserirMenu(menu, (erro,menu)=> {
            carregarMenu();
            limparCamposMenu();
        })    
    }
    else {
        atualizarMenu(menu.cod_prod, menu, (erro, menu) => {
            carregarMenu();
            limparCamposMenu();
        })
    }
}

//Eventos
function onSalvarMenu(menu){
    console.log("menu: "+ menu);
    salvarMenu(menu);
}

function onCancelar(){
    carregarMenu();
}

function onDeletar(cod_prod){
    deletarMenu(cod_prod, (erro, menu) => {
        alert(`Produto ${cod_prod} removido com sucesso!`);
        carregarMenu();
    });
}



