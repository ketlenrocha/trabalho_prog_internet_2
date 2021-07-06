

function renderTabelaPedido(pedido){
    var str=`
    <h3>Tabela de Pedidos</h3>
    <a id='novoPedido' href="#">Novo</a>
    <div id="tabela">

    <table>
        <tr>
            <th style='text-align: center;'>Número pedido</th>
            <th style='text-align: center;'>cod produto</th>
            <th style='text-align: center;'>codigo cliente</th>
            <th style='text-align: center;'>Quantidade</th>
            <th style='text-align: center;'>Observacoes</th>
            <th colspan="2">Ação</th>
        </tr>`;

    for(var i in pedido){
        str+=`<tr id=${pedido[i].id}>
                <td>${pedido[i].nr_pedido}</td>
                <td>${pedido[i].cod_prod}</td>
                <td>${pedido[i].cod_cli}</td>
                <td>${pedido[i].quantidade}</td>
                <td>${pedido[i].observacoes}</td>
                <td><a class="edit" href="#" 
                    data-id="${pedido[i].nr_pedido}">Editar</a></td>
                <td><a class="delete" href="#" 
                    data-id="${pedido[i].nr_pedido}">Deletar</a></td>
            </tr>`;
            
    } 
    str+= `
    </table>
    </div>`;

    var tabela = document.querySelector("main");
    tabela.innerHTML = str;

    var linkNovo = document.querySelector("#novoPedido");
    linkNovo.onclick = function(event){
        carregarFormPedido();
    }

    const linksEdit = document.querySelectorAll(".edit"); 
    
    for(let linkEdit of linksEdit) {
        linkEdit.onclick = function(event){
            onEditPedido(event.target.getAttribute("data-id"));
        }
    }

    const linksDelete = document.querySelectorAll(".delete");
    for(let linkDelete of linksDelete) {
        linkDelete.onclick = function(event){
            onDeletarPedido(event.target.getAttribute("data-id"));
        }
    }

}