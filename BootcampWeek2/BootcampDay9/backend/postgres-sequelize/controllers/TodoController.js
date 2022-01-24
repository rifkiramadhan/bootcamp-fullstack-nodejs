const { todo } = require('../models');

class TodoController {
    static readTodo(req, res) {
        todo.findAll({
            order: [
                ['id', 'ASC'],
            ],
        })
        .then(todos => {
            res.json(todos);
        })
        .catch(err => {
            res.json(err);
        });
    };

    static addTodo(req, res) {
        let { task, status } = req.body;
        status === "true" ? status = true : status = false;
        todo.create({
            task,
            status: Boolean(status)
        })
        .then(result => {
            res.json(result);
        })
        .catch(err => {
            res.json(err);
        });
    };

    static findById(req, res) {
        const id = +req.params.id;

        todo.findByPk(id)
        .then(result => {
            if (result) {
                res.json(result);
            } else {
                res.json({
                    message: "Task not found!",
                });
            };
        })
        .catch(err => {
            res.json(err);
        });
    };

    static deleteTodo(req, res) {
        const id = +req.params.id;
        todo.destroy({
            where: {
                id
            },
        })
        .then(result => {
            if (result === 1) {
                res.json({
                    message: `Id ${id} has been successfully deleted`,
                });
            } else {
                res.json({
                    message: `The id ${id} does not exist`,
                });
            };

            // res.json(result);
        })
        .catch(err => {
            res.json(err);
        });
    };

    static updateTodo(req, res) {
        const id = +req.params.id;
        let { task, status } = req.body;
        status === false ? status = false : status = true || status === true ? status = true : status = false;

        todo.update({
            task,
            status: Boolean(status)
        }, {
            where: {
                id
            },
        })
        .then(result => {
            if (result[0] === 1) {
                res.json({
                    message: `Id ${id} has been updated`,
                });
            } else {
                res.json({
                    message: `The id ${id} has not been updated`,
                });
            };

            // res.json(result);
        })
        .catch(err => {
            res.json(err);
        });
    };
};

module.exports = TodoController;