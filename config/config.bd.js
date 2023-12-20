// import mysql from ‘mysql"
const mysql = require('mysql');
// Створемо нове з`єднання на локальному хості
// 3 exzaKnun napamerpamn
var connection = mysql.createConnection({
host: 'localhost',
user: 'root',
password: '',
database: 'turizmo'
});
// З`єднуємося з БД
// Sixwo Bnan0 - eMBOANMO, WO 3 EAHAHHA BinGynocA
// Якщо ні то виводитеме помилку
connection.connect(function (err) {
    if (!err) {
        console.log("Database is connected");
    }  else {
        console.log("Error while connecting with database");
    }
});
// Експорт з`єднання
module.exports = connection;
/*var connection = require('./../config/config.bd');*/