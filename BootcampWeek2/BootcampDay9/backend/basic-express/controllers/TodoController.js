const Todo = require('../models/Todo');

class TodoController {
    static getTodos(req, res) {
        Todo.getTodos()
            .then(todos => {
                console.log(todos);
                res.send(todos);
            })
            .catch(err => {
                res.send(err);
            });
    };

    static infoTodo(req, res) {
        // res.send("Todo Info Page");
        const id = +req.params.id;
        Todo.findById(id)
        .then(result => {
            res.send(result);
        })
        .catch(err => {
            res.send(err);
        });
    };

    static createTodo(req, res) {
        Todo.createTodo(req.body)
        .then(result => {
            console.log(result);
            res.send(result);
        })
        .catch(err => res.send(err));
    };

    static search(req, res) {
        Todo.search(req.query)
        .then(result => {
            res.send(result);
        })
        .catch(err => res.send(err));
    };
};

module.exports = TodoController;