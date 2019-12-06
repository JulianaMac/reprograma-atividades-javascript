const express = require('express')

const server = express();

const users = ['Juliana', 'Priscila', 'Ana', 'Kelly']
const books = ['Harry Potter', 'Livro2', 'Livro3', 'Livro4']
const pais = ['Brasil', 'China', 'Japão', 'Canadá']

function checkUserInArray(req, res, next) {
    const user = users[req.params.indexUser];
    if (!user) {
        return res.status(400).json({ error: 'Users index doesnt exists' });
    }
    req.user = user;
    return next();
}

function checkBookInArray(req, res, next) {
    const book = books[req.params.indexBooks];
    if (!book) {
        return res.status(400).json({ error: 'Books index doesnt exists' });
    }
    req.book = book;
    return next();
}
server.get('/', (req, res) => {
    res.json('Hello Word!');
})

server.get('/users', (req, res) => {
    return res.json(users);
})

server.get('/users/:indexUser', checkUserInArray, (req, res) => {
    const id = req.params.indexUser
    return res.json(users[id]);
})

server.get('/books', (req, res) => {
    return res.json(books);
})

server.get('/books/:indexBooks', checkBookInArray, (req, res) => {
    const id = req.params.indexBooks
    return res.json(books[id]);
})

server.get('/users/:indexUser/books/:indexBooks', checkUserInArray, checkBookInArray, (req, res) => {
    //desconstrução de objeto
    const { indexUser, indexBooks } = req.params;
    return res.json('Usuários: ' + users[indexUser] + '. Livro: ' + books[indexBooks]);
})

server.get('/country', (req, res, next) => {
    const { id } = req.query;
    return res.json(pais[id]);
})
server.listen(3000);