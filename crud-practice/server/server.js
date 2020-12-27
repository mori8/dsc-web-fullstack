const fs = require('fs');
const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const port = process.env.PORT || 3001;

const data = fs.readFileSync('../database.json');
const conf = JSON.parse(data);
const mysql = require('mysql');

const connection = mysql.createConnection({
    host: conf.host,
    user: conf.user,
    password: conf.password,
    port: conf.port,
    database: conf.database
});

connection.connect();

app.use(cors());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/api/articles', (req, res) => {
    connection.query(
        'SELECT * FROM BOARD WHERE isDeleted = 0',
        (err, rows, fields) => {
            res.send(rows);
        }
    )
});

app.get('/api/articles/:id', (req, res) => {
    connection.query(
        `SELECT * FROM BOARD WHERE id = ${req.params.id}`,
        (err, rows, fields) => {
            res.send(rows);
        }
    )
});

app.post('/api/articles', (req, res) => {
    let query = 'INSERT INTO board(title, name, date, body, isDeleted) VALUES (?, ?, now(), ?, 0)';
    let title = req.body.title;
    let name = req.body.name;
    // let date = req.body.date;
    let body = req.body.body;
    let params = [title, name, body];
    console.log(req.body);
    connection.query(query, params,
        (err, rows, fields) => {
            res.send(rows);
            console.log(err);
        })
});

app.delete('/api/articles/:id', (req, res) => {
    let query = 'UPDATE board SET isDeleted = 1 WHERE id = ?';
    let params = [req.params.id];
    connection.query(query, params,
        (err, rows, fields) => {
            res.send(rows);
        })
})

app.listen(port, ()=>{
    console.log(`express is running on ${port}`);
})


