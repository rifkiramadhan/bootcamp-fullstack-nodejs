const FarmController = require("./controllers/FarmController");

const command = process.argv[2];
const params = process.argv.slice[3];

switch (command) {
  case undefined:
    FarmController.help();
    break;
  case 'help':
    FarmController.help();
    break;
  case 'show':
    FarmController.show();
    break;
  case 'create':
    FarmController.create(params);
    break;
  default:
    break;
}