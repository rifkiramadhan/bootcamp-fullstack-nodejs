const todoController = require('./controllers/todoController.js');
const command = process.argv[2];
const params = process.argv.slice(3);

switch(command){
    case 'help':
        todoController.help();
    break;
    case 'list':
        todoController.list();
    break;
    case 'add':
        todoController.add(params);
    break;
    case 'update':
        todoController.update(params);
    break;
    case 'delete':
        todoController.delete(params);
    break;
    case 'complete':
        todoController.complete(params);
    break;
    case 'uncomplete':
        todoController.uncomplete(params);
    break;
    default:
        todoController.message("Unknown Command");
    break;
};

/* Command Line
    node index.js help
    node index.js list
    node index.js add "Makan Bersama" "done"
    node index.js delete 1
    node index.js update 1 "Minum Bersama" 
*/