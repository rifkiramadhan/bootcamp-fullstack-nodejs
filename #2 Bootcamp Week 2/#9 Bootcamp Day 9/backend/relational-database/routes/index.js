const { Router } = require('express');
const route = Router();

route.get('/', (req, res) => {
    // res.json({
    //     message: "Home Page",
    // });

    res.render('index.ejs');
});

const authorRoutes = require('./author');
const bookRoutes = require('./book');
route.use('/authors', authorRoutes);
route.use('/books', bookRoutes);

module.exports = route;