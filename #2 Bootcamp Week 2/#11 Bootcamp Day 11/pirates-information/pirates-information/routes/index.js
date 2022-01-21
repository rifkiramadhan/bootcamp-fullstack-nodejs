const { Router } = require('express');
const route = Router();

route.get('/', (req, res) => {
    // res.json({
    //     message: "Home Page",
    // });

    res.render('index.ejs');
});

const shipsRoutes = require('./ships');
const pirateRoutes = require('./pirate');
route.use('/ships', shipsRoutes);
route.use('/pirates', pirateRoutes);

module.exports = route;