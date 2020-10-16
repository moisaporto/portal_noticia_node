var mysql = require('mysql');

var connMySQL = function () {

    return mysql.createConnection({
        host: 'localhost',
        user: 'u_portal_noticias',
        password: '0987',
        database: 'portal_noticias'
    });

}

module.exports = function () {
    return connMySQL;
}