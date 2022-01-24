const { book } = require('../models');

class BookController {
    static async getBooks(req, res) {
        try {
            let books = await book.findAll();
            
            // res.json(books);
            
            // Membuat ID table menjadi berurutan
            // books = books.map((book, index) => {
            //     const { title, author, released_date, pages, genre } = book
            //     return {
            //         id: index + 1 || null,
            //         title,
            //         author,
            //         released_date: released_date.toLocaleDateString(),
            //         pages,
            //         genre
            //     };
            // });

            res.render('book.ejs', { books });
        } catch {
            res.json(e);
        };
    };

    static async addPage(req, res) {
        res.render('bookAdd.ejs');
    };
    
    static async add(req, res) {
        try {
            const { title, author, released_date, pages, genre } = req.body;
            let bookResult = await book.create({
                title, 
                author, 
                released_date: new Date(released_date), 
                pages: +pages, 
                genre
            });

            res.redirect('/books');
            // res.json(bookResult);
        } catch (e) {
            res.json(e);
        };
    };

    static async remove(req, res) {
        try {
            const id = +req.params.id;
            let result = await book.destroy({
                where: {
                    id
                },
            });

            if (result === 1) {
                res.redirect('/books');
                // res.json({
                //     message: `Id ${id} has been successfully deleted`
                // });
            } else {
                res.json({
                    message: `Failed to delete`
                });
            };

            res.json(result);
        } catch (e) {
            res.json(e);
        };
    };

    static async editPage(req, res) {
        try {
            const id = +req.params.id;
            let books = await book.findOne({
                where: {
                    id
                },
            });
            
            res.render('bookEdit.ejs', { books });
        } catch (e) {
            res.json(e);
        };
    };

    static async edit(req, res) {
        try {
            const { title, author, released_date, pages, genre } = req.body;
            const id = +req.params.id;

            let result = await book.update({
                title, 
                author, 
                released_date: new Date(),
                pages: +pages, 
                genre
            }, {
                where: {
                    id
                },
            });

            if (result[0] === 1) {
                res.redirect('/books');

                // res.json({
                //     message: `Id ${id} has been updated`
                // });
            } else {
                res.json({
                    message: `Failed to update ${result}`
                });
            };
            
        } catch (e) {
            res.json(e);
        };
    };

    static async info(req, res) {
        try {
            let id = +req.params.bookId;
            let bookResult = await book.findByPk(id);

            bookResult ? 
                // res.json(bookResult)
                res.render('bookInfo.ejs', { book: bookResult })
                : 
                res.json({
                    message: "Book not found!"
                });

        } catch (e) {
            res.json(e);
        };
    };

    static async search(req, res) {
        try {
            let keyName;

            for (let key in req.query) {
                keyName = key;
            };

            switch (keyName) {
                case 'author':
                    let bookAuthor = await book.findAll({
                        where: {
                            author: req.query[keyName]
                        },
                    });

                    res.json(bookAuthor);
                    break;
                case 'title':
                    let bookResults = await book.findAll({
                        where: {
                            title: req.query[keyName]
                        },
                    });

                    res.json(bookResults);                    
                    break;
                default:
                    break;
            };

            console.log(keyName);

        } catch (e) {
            res.json(e);
        };
    };
};

module.exports = BookController;