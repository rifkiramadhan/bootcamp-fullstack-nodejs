const userRoute = require('express').Router();
const UserController = require('../controllers/UserController');

userRoute.get('/', UserController.readUser);
userRoute.post('/add', UserController.addUser);
userRoute.get('/detail/:id', UserController.findById);

module.exports = userRoute;