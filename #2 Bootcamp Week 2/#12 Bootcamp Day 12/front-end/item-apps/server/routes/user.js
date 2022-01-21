const userRoute = require('express').Router();
const userController = require('../controllers/UserController');

userRoute.get('/all', userController.getUserAll);
userRoute.post('/auth/login', userController.login);
userRoute.post('/auth/register', userController.register);



module.exports = userRoute;