const bookRoutes = require('express').Router();
const BookControllers = require('../controllers/BookController');

bookRoutes.get('/', BookControllers.get);
bookRoutes.get('/add', BookControllers.addPage);
bookRoutes.post('/add', BookControllers.add);
bookRoutes.get('/detail/:id', BookControllers.findById);
bookRoutes.get('/delete/:id', BookControllers.delete);
bookRoutes.get('edit/:id', BookControllers.editPage);
bookRoutes.post('/edit/:id', BookControllers.edit);

module.exports = bookRoutes;