const { Router } = require('express');
const route = Router();

route.get('/', (req, res) => {
    // res.json({
    //     message: "Home Page"
    // });

    res.render('index.ejs');
});

const BookRoutes = require('./book.js');
route.use('/books', BookRoutes);

module.exports = route;