function renderTabelaMenu(menu){
    var str=`
    <h3>CARDÁPIO</h3>
    <a id='novoMenu' href="#">Novo Produto</a>
    <div id="tabela">

    <table>
        <tr>
            <th style='text-align: center;'>Produto </th>
            <th style='text-align: center;'>Imagem</th>
            <th style='text-align: center;'>Nome</th>
            <th style='text-align: center;'>Descrição</th>
            <th style='text-align: center;'>Valor</th>
            <th colspan="2">Ação</th>
        </tr>`;
        
    for(var i in menu){
        
        str+=`<tr id=${menu[i].id}>
                <td>${menu[i].cod_prod} </td>
                <td> <img src="img/${menu[i].dir_img} " alt="hamburguer" title="hamburguer"> </td>
                <td>${menu[i].nome}</td>
                <td>${menu[i].descricao}</td>
                <td>${menu[i].valor}</td>                
                
                <td><a class="delete" href="#" 
                    data-id="${menu[i].cod_prod}">Deletar</a></td>
                   
            </tr>`;          
            
    } 
    str+= `
    </table>
    </div>`;
    
    var tabela = document.querySelector("main");
    tabela.innerHTML = str;

    var linkNovo = document.querySelector("#novoMenu");
    linkNovo.onclick = function(event){
        carregarFormMenu();
    }

    const linksDelete = document.querySelectorAll(".delete");
    for(let linkDelete of linksDelete) {
        linkDelete.onclick = function(event){
            onDeletar(event.target.getAttribute("data-id"));
        }
    }
}