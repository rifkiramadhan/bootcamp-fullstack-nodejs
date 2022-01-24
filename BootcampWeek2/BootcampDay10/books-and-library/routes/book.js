const { Router } = require('express');
const BookRoute = Router();
const { BookController } = require('../controllers');

BookRoute.get('/', BookController.getBooks);
BookRoute.get('/search', BookController.search);
BookRoute.get('/add', BookController.addPage);
BookRoute.post('/add', BookController.add);
BookRoute.get('/remove/:id', BookController.remove);
BookRoute.get('/edit/:id', BookController.editPage);
BookRoute.post('/edit/:id', BookController.edit);
BookRoute.get('/info/:bookId', BookController.info);

module.exports = BookRoute;