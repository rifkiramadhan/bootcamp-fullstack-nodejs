const shipsRoutes = require('express').Router();
const ShipsControllers = require('../controllers/ShipsController');

shipsRoutes.get('/', ShipsControllers.get);
shipsRoutes.get('/add', ShipsControllers.addPage);
shipsRoutes.post('/add', ShipsControllers.add);
shipsRoutes.get('/detail/:id', ShipsControllers.findById);
shipsRoutes.get('/delete/:id', ShipsControllers.delete);
shipsRoutes.get('/edit/:id', ShipsControllers.editPage);
shipsRoutes.post('/edit/:id', ShipsControllers.edit);

module.exports = shipsRoutes;