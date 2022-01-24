const pirateRoutes = require('express').Router();
const PirateControllers = require('../controllers/PirateController');

pirateRoutes.get('/', PirateControllers.get);
pirateRoutes.get('/add', PirateControllers.addPage);
pirateRoutes.post('/add', PirateControllers.add);
pirateRoutes.get('/detail/:id', PirateControllers.findById);
pirateRoutes.get('/delete/:id', PirateControllers.delete);
pirateRoutes.get('/edit/:id', PirateControllers.editPage);
pirateRoutes.post('/edit/:id', PirateControllers.edit);

module.exports = pirateRoutes;