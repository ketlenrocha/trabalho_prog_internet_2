function renderTabelaCliente(cliente){
    var str=`
    <h3>Tabela de Cliente</h3>
    <a id='novoCliente' href="#">Novo Cliente</a>
    <div id="tabela">

    <table>
        <tr>
            <th style='text-align: center;'>Cliente</th>
            <th style='text-align: center;'>Nome</th>
            <th style='text-align: center;'>Telefone</th>
            <th style='text-align: center;'>Endereço</th>
            <th style='text-align: center;'>CPF</th>
            <th style='text-align: center;'>Senha</th>
            <th colspan="2">Ação</th>
        </tr>`;

    for(var i in cliente){
        
        str+=`<tr id=${cliente[i].id}>
                <td>${cliente[i].cod_cli}</td>
                <td>${cliente[i].nome}</td>
                <td>${cliente[i].telefone}</td>
                <td>${cliente[i].endereco}</td>
                <td>${cliente[i].cpf}</td>
                <td>${cliente[i].senha}</td>
                <td><a class="edit" href="#" 
                    data-id="${cliente[i].cod_cli}">Editar</a></td>

                   
            </tr>`;
            
            
    } 
    str+= `
    </table>
    </div>`;

    
    var tabela = document.querySelector("main");
    tabela.innerHTML = str;

    var linkNovo = document.querySelector("#novoCliente");
    linkNovo.onclick = function(event){
        carregarFormCliente();
    }

    const linksEdit = document.querySelectorAll(".edit");
    
    for(let linkEdit of linksEdit) {
        linkEdit.onclick = function(event){
            onEdit(event.target.getAttribute("data-id"));
        }
    }

}