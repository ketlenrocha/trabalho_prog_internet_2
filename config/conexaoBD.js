const mysql = require('mysql')

const conexao = mysql.createConnection({
    host: "localhost",
    user: "root",
    password:"",
    database: "api_hamburgueria"
});

module.exports = conexao