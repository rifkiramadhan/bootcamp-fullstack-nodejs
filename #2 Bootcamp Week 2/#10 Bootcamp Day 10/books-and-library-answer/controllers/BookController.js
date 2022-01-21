const { book } = require('../models')

class BookController {
    static async getBooks(req, res) {
        try {
            let books = await book.findAll()

            // res.json(books)
            books = books.map((book, index) => {
                const { title, author, released_date, pages, genre } = book
                return {
                    id: index + 1,
                    title,
                    author,
                    released_date: released_date.toLocaleDateString(),
                    pages,
                    genre
                }
            })
            res.render('book.ejs', { books })
        } catch (e) {
            res.json(e)
        }
    }

    static async add(req, res) {
        try {
            const { title, author, released_date, pages, genre } = req.body;
            let bookResult = await book.create({
                title,
                author,
                released_date: new Date(released_date),
                pages: +pages,
                genre
            })

            res.json(bookResult)
        } catch (e) {
            res.json(e)
        }
    }

    static async remove(req, res) {
        try {
            const id = +req.params.id
            let result = await book.destroy({
                where: { id }
            })

            if (result === 1) {
                res.json({
                    message: `Id ${id} has been successfully deleted`
                })
            } else {
                res.json({
                    message: `Failed to delete`
                })
            }
        } catch (e) {
            res.json(e)
        }
    }

    static async edit(req, res) {
        try {
            const { title, author, released_date, pages, genre } = req.body
            const id = +req.params.id

            let result = await book.update({
                title,
                author,
                released_date: new Date(released_date),
                pages: +pages,
                genre
            }, {
                where: { id }
            })

            if (result[0] === 1) {
                res.json({
                    message: `Id ${id} has been updated`
                })
            } else {
                res.json({
                    message: `Failed to update`
                })
            }

        } catch (e) {
            res.json(e)
        }
    }

    static async info(req, res) {
        try {
            let id = +req.params.bookId
            let bookResult = await book.findByPk(id)

            bookResult ?
                res.json(bookResult)
                :
                res.json({
                    message: 'Book not found'
                })
        } catch (e) {
            res.json(e)
        }
    }

    static async search(req, res) {
        try {
            let keyName;
            for (let key in req.query) {
                keyName = key
            }
            switch (keyName) {
                case 'author':
                    let bookAuthor = await book.findAll({
                        where: {
                            author: req.query[keyName]
                        }
                    })

                    res.json(bookAuthor)
                    break;
                case 'title':
                    let bookResults = await book.findAll({
                        where: {
                            title: req.query[keyName]
                        }
                    })

                    res.json(bookResults)

                    break;
            }
        }
        catch (e) {
            res.json(e)
        }
    }
}

module.exports = BookController