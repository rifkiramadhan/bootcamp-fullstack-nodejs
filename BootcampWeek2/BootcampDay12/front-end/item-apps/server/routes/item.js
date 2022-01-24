const itemRoute = require('express').Router();
const ItemController = require('../controllers/ItemController');
const { Authentication } = require('../middlewares/auth');

itemRoute.get('/', Authentication, ItemController.getItems);
itemRoute.post('/', Authentication, ItemController.createItem);

module.exports = itemRoute;