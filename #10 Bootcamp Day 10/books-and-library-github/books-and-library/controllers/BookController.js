const { books, author } = require('../models');

class BookController {
    static get(req, res) {
        books.findAll({
            order: [
                ['id', 'ASC'],
            ],
            include: [
                author
            ]
        })
        .then(books => {
            // Untuk menjalankan JSON API
            // res.json(books);

            // Untuk menjalankan tampilan ejs
            res.render('books/book.ejs', {books});
        })
        .catch(err => {
            res.json(err);
        });
    };

    static addPage(req, res) {
        res.render('books/addBook.ejs');
    };

    static add(req, res) {
        let { title, genre, page, price, image, authorId, released_date } = req.body;

        books.create({
            title, genre, page, price, image, authorId, released_date
        })
        .then(result => {
            // Untuk mengarahkan halaman form input ke home books setelah data ditambahkan
            res.redirect('/books');

            // Untuk memberikan validasi pada postman bahwa buku berhasil tersimpan
            // res.json({
            //     message : `Buku ${title} berhasil tersimpan.`,
            // });
        })
        .catch(err => {
            res.json(err);
        });
    };

    static findById(req, res) {
        const id = +req.params.id;

        books.findByPk(id)
        .then(result => {
            if (result) {
                res.json(result);
            } else {
                res.json({
                    message: "Task tidak ditemukan!",
                });
            };
        })
        .catch(err => {
            res.json(err);
        });
    };

    static delete(req, res) {
        const id = +req.params.id;

        books.destroy({
            where: {
                id
            },
        })
        .then(result => {
            if (result === 1) {
                // Untuk mengarahkan halaman form input ke home books setelah data dihapus
                res.redirect('/books');
                
                // Untuk memberikan validasi pada postman bahwa buku berhasil dihapus
                // res.json({
                //     message: `Id ${id} berhasil dihapus`,
                // });
            } else {
                res.json({
                    message: `Id ${id} sudah tidak tersedia!`,
                });
            };

            // res.json(result);
        })
        .catch(err => {
            res.json(err);
        });
    };

    static editPage(req, res) {
        const id = +req.params.id;

        books.findOne({
            where : {
                id
            },
        })
        .then(result => {
            res.render('books/editBook.ejs', {books:result});
        })
        .catch(err =>{
            res.json(err);
        });
    };

    static edit(req, res) {
        const id = +req.params.id;
        let { title, genre, page, price, image, authorId, released_date } = req.body;

        books.update({
            title, genre, page, price, image, authorId, released_date
        }, {
            where: {
                id
            },
        })
        .then(result => {
            if (result[0] === 1) {
                // Untuk mengarahkan halaman form input ke home books setelah data diperbaharui
                res.redirect('/books');

                // Untuk memberikan validasi pada postman bahwa buku berhasil diperbaharui
                // res.json({
                //     message: `Id ${id} berhasil diperbaharui`,
                // });
            } else {
                // Untuk memberikan validasi pada postman bahwa buku tidak berhasil diperbaharui
                res.json({
                    message: `ID ${id} tidak berhasil diperbaharui`,
                });
            };
        })
        .catch(err => {
            res.json(err);
        });
    };
};

module.exports = BookController;