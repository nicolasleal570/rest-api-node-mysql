const mysql = require('mysql');

const mysqlConnection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'company_rest_api'
});

mysqlConnection.connect(function (err) {
    if (err) {
        console.log(err);   
    }else{
        console.log('DB is Connected');
    }
});

module.exports = mysqlConnection;