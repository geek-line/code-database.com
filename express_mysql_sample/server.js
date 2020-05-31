const express = require('express');
const app = express();
const mysql = require('mysql');

app.get('/', (req, res) => res.sendFile(__dirname + '/index.html'));

app.get('/api/hello', (req, res) => {
    const connection = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: 'Reibo1998@',
        database: 'express_mysql_sample'
    });
    connection.connect();
    connection.query('SELECT * FROM messages', function (error, results, fields) {
        if (error) throw error;
        console.log(results[0]);
        res.send(results[0].message);
        connection.destroy();
    });
});

app.listen(3000, function () {
    console.log('Example app listening on port 3000!'); 
});