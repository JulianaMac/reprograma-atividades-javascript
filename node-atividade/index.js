const express = require('express')

const server = express();

server.get('/', function (req, res) {
    res.send('Hello World!');
});

server.get('/about', (req, res) => {
    res.json('about');
});

server.get('/users/:username', (req, res, next) => {
    res.json(req.params);
});

server.get('/books/:bookId', (req, res, next) => {
    res.send(req.params);
});

server.get('/users/:username/books/:bookId',(req,res, next) => {
    res.send(req.params);
});

server.get('/search', (req, res, next) => {
    res.json(req.query);
});

server.listen(3000);