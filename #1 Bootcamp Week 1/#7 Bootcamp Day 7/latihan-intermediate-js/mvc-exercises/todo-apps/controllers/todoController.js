const Todo = require('../models/todoModels');
const View = require('../views/todoView');

class todoController {
    static help(){
        View.help();
    };

    static list(){
        Todo.list();
    };
    
    static add(params){
        let add = Todo.add(params);
        View.message(add);
    };

    static update(params){
        let update = Todo.update(params);
        View.message(update);
    };

    static delete(params){
        let deletes = Todo.delete(params);
        View.message(deletes);
    };

    static complete(params){
        let complete = Todo.complete(params);
        View.message(complete);
    };

    static uncomplete(params){
        let uncomplete = Todo.uncomplete(params);
        View.message(uncomplete);
    };

    static message(msg){
        View.message(msg);
    };
};

module.exports = todoController;