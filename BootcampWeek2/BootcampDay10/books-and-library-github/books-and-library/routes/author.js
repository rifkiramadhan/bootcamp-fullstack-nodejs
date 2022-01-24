const authorRoutes = require('express').Router();
const AuthorControllers = require('../controllers/AuthorController');

authorRoutes.get('/', AuthorControllers.get);
authorRoutes.get('/add', AuthorControllers.addPage);
authorRoutes.post('/add', AuthorControllers.add);
authorRoutes.get('/detail/:id', AuthorControllers.findById);
authorRoutes.get('/delete/:id', AuthorControllers.delete);
authorRoutes.get('/edit/:id', AuthorControllers.editPage);
authorRoutes.post('/edit/:id', AuthorControllers.edit);

module.exports = authorRoutes;