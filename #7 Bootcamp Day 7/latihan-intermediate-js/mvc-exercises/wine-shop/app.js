const command = process.argv[2];
const params = process.argv.slice(3);
const WineController = require('./controllers/WineController')

switch (command) {
    case undefined:
        WineController.help()
        break;
    case 'help':
        WineController.help()
        break;
    case 'wines':
        WineController.wines()
        break;
    case 'add':
        WineController.add(params)
        break;
    case 'sell':
        WineController.sell(params)
        break;
    case 'rename':
        WineController.rename(params)
        break;
    case 'findById':
        WineController.findById(params)
        break;
    default:
        WineController.message(`Command is unknown!`)
        break;
}