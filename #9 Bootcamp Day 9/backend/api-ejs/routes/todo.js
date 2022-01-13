const todoRoute = require('express').Router();
const TodoController = require('../controllers/TodoController');

todoRoute.get('/', TodoController.readTodo);
todoRoute.get('/add', TodoController.addTodoPage);
todoRoute.post('/add', TodoController.addTodo);
todoRoute.get('/detail/:id', TodoController.findById);
todoRoute.get('/delete/:id', TodoController.deleteTodo);
todoRoute.post('/update/:id', TodoController.updateTodo);

module.exports = todoRoute;