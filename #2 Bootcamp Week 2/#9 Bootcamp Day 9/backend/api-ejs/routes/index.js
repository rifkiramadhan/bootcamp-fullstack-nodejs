const { Router } = require('express');
const route = Router();

route.get('/', (req, res) => {
    // res.json({
    //     message: "Home Page",
    // });
    res.render('index.ejs');
});

const todoRoutes = require('./todo');
const userRoutes = require('./user');
route.use('/todos', todoRoutes);
route.use('/users', userRoutes);

module.exports = route;