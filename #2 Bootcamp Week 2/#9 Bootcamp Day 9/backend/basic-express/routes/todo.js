const todoRoute = require('express').Router();
const TodoControllers = require('../controllers/TodoController');

todoRoute.get('/', TodoControllers.getTodos);
todoRoute.get('/info/:id', TodoControllers.infoTodo);
todoRoute.post('/create', TodoControllers.createTodo);
todoRoute.get('/search', TodoControllers.search);

module.exports = todoRoute;