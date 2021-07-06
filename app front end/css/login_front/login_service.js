const URI_validar = 'http://localhost:3000/api/authCliente'


function validarCliente(cliente, callback) {

    const xhttp = new XMLHttpRequest();   

    xhttp.onreadystatechange = function () {
        
        if (this.readyState === 4) {
            
            if(this.status === 201) {
                console.log(this.responseText) 
                callback(null, this.responseText)                
            }
            else {               
                const erro = {
                    status: this.status,
                    msg: this.responseText
                    
                }
                          
                callback(erro, null);
            }
        }
    };

    xhttp.open("POST", URI_validar, true);
    xhttp.setRequestHeader("Content-Type","application/json");
    xhttp.send(JSON.stringify(cliente));

}
