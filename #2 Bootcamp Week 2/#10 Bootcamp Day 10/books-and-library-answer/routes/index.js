const { Router } = require('express')
const route = Router()

route.get('/', (req, res) => {
    // res.json({
    //     message: "Home page"
    // })
    res.render('index.ejs')
})
const BookRoutes = require('./book.js')
route.use('/books', BookRoutes)

module.exports = route