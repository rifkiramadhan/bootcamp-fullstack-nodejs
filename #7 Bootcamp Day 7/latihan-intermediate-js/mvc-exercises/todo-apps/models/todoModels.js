const fs = require('fs');

class Todo {
    constructor(id, task, status, created_at, completed_at){
        this.id = id;
        this.task = task || " ";
        this.status = status || false;
        this.created_at = created_at;
        this.completed_at = completed_at || null;
    };

    static getData(){
        let data = fs.readFileSync('./data.json', 'utf8');
        let parseData = JSON.parse(data);

        let result = parseData.map(data => {
            const {id, task, status, created_at, completed_at} = data;
            return new Todo(id, task, status, created_at, completed_at);
        });

        return result;
    };

    static list(){
        let list = this.getData();
        list.forEach(lists => {
            let {id, task, status} = lists;
            if (status === true ) {
                console.log(`${id}. [x] ${task}`);
            } else {
               console.log(`${id}. [ ] ${task}`);
            };
        });

        return list;
    };

    static add(params) {
        const [task, status] = params;
        let list = this.getData();

        let tgl = new Date();
        let created_at = tgl.getFullYear() 
                 + "-" + (tgl.getMonth() + 1)
                 + "-" + tgl.getDate()
                 + " " + tgl.getHours() 
                 + ":" + tgl.getMinutes() 
                 + ":" + tgl.getSeconds();
        let completed_at = tgl.getFullYear() 
                 + "-" + (tgl.getMonth() + 1) 
                 + "-" + tgl.getDate() 
                 + " " + tgl.getHours() 
                 + ":" + tgl.getMinutes() 
                 + ":" + tgl.getSeconds();    

        if(completed_at !== null){
            list.status = true;
        };

        let id = list[list.length - 1].id + 1;
        list.push(new Todo(id, task, list.status, created_at, completed_at));

        this.save(list);
        return `"${task}" has been create!`;
    };

    static update(params) {
        let updateTodo = this.getData();
        let [update_id, update_task] = params;

        let temp = [];
        for(var i = 0; i < updateTodo.length; i++){
            if (updateTodo[i].id === +update_id){
                temp.push(updateTodo[i].task);
            };
        };

        updateTodo = updateTodo.map(todo => {
            let {id, task, status, created_at, completed_at} = todo;
            if(todo.id === Number(update_id)){
                todo.task = update_task;
                return todo;
            } else {
                return todo;
            };
        });

        this.save(updateTodo);
        return `"${temp}" has been changed to ${update_task}`;
    };

    static delete(params){
        let todos = this.getData();
        let id = Number(params[0]);
        let todo_task = '';

        todos.forEach(todo => {
            if(todo.id === id){
                todo_task = todo.task;
            };
        });

        todos = todos.filter(todo => todo.id !== id);
        this.save(todos);

        return `"${todo_task}" has been remove!`;
    };

    static complete(params){
        let complete = this.getData();
        let [complete_id] = params;

        let temp = [];
        for(var i = 0; i < complete.length; i++){
            if (complete[i].id === Number(complete_id)){
                temp.push(complete[i].task);
            };
        };

        complete = complete.map(todo => {
            let {id, task, status, created_at, completed_at} = todo;
            if(todo.id === Number(complete_id)){
                todo.status = true;

                let tgl = new Date();
                todo.completed_at = tgl.getFullYear() 
                            + "-" + (tgl.getMonth() + 1) 
                            + "-" + tgl.getDate() 
                            + " " + tgl.getHours() 
                            + ":" + tgl.getMinutes() 
                            + ":" + tgl.getSeconds();
                
                return todo;
            } else {
                return todo;
            };
        });

        this.save(complete);
        return `"${temp}" has been completed!`;
    };

    static uncomplete(params){
        let uncomplete = this.getData();
        let [uncomplete_id] = params;
        
        let temp = [];
        for(var i = 0; i < uncomplete.length; i++){
            if (uncomplete[i].id === Number(uncomplete_id)){
                temp.push(uncomplete[i].task);
            };
        };

        uncomplete = uncomplete.map(todo => {
            let {id, task, status, created_at, completed_at} = todo;
            if(todo.id === Number(uncomplete_id)){
                todo.status = false;
                todo.completed_at = null;
                return todo;
            } else {
                return todo;
            };
        });
        
        this.save(uncomplete);
        return `"${temp}" has been uncompleted!`;
    };

    static save(data){
        fs.writeFileSync('./data.json', JSON.stringify(data, null, 3));
    };
};

module.exports = Todo;