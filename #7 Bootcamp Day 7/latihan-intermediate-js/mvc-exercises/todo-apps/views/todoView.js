class ViewTodo {
    static help() {
        console.log("TODO LIST COMMANDS : ");
        console.log('node index.js');
        console.log("node index.js help");
        console.log("node index.js list");
        console.log("node index.js add <task_name>");
        console.log("node index.js delete <task_id>");
        console.log("node index.js update <task_id> <task_name>");
        console.log("node index.js complete <task_id>");
        console.log("node index.js uncomplete <task_id>");
    };

    static message(msg){
        console.log(msg);
    };
};

module.exports = ViewTodo;