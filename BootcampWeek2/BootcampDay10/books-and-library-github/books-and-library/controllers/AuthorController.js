const { author } = require('../models');

class AuthorController {
    static get(req, res) {
        author.findAll({
            order: [
                ['id', 'ASC'],
            ],
        })
        .then(authors => {
            // Untuk menjalankan JSON API
            // res.json(authors);

            // Untuk menjalankan tampilan ejs
            res.render('author/author.ejs', {authors});
        })
        .catch(err => {
            res.json(err);
        });
    };

    static addPage(req, res) {
        res.render('author/addAuthor.ejs');
    };

    static add(req, res) {
        let { name, age, image } = req.body;

        author.create({
            name, age, image
        })
        .then(result => {
            // Untuk mengarahkan halaman form input ke home author setelah data ditambahkan
            res.redirect('/authors');
            
            // Untuk memberikan validasi pada postman bahwa buku berhasil tersimpan
            // res.json({
            //     message : `Author ${title} berhasil tersimpan.`,
            // });
        })
        .catch(err => {
            res.json(err);
        });
    };

    static findById(req, res) {
        const id = +req.params.id;

        author.findByPk(id)
        .then(result => {
            if (result) {
                res.json(result);
            } else {
                res.json({
                    message: "Task tidak ditemukan",
                });
            };
        })
        .catch(err => {
            res.json(err);
        });
    };

    static delete(req, res) {
        const id = +req.params.id;

        author.destroy({
            where: {
                id
            },
        })
        .then(result => {
            if (result === 1) {
                // Untuk mengarahkan halaman form input ke home authors setelah data dihapus
                res.redirect('/authors');
                
                // Untuk memberikan validasi pada postman bahwa buku berhasil dihapus
                // res.json({
                //     message: `Id ${id} berhasil dihapus`,
                // });
            } else {
                // Untuk memberikan validasi pada postman bahwa buku tidak tersedia
                // res.json({
                //     message: `Id ${id} sudah tidak tersedia!`,
                // });
            };
        })
        .catch(err => {
            res.json(err);
        });
    };

    static editPage(req, res) {
        const id = +req.params.id;

        author.findOne({
            where : {
                id
            },
        })
        .then(result => {
            res.render('author/editAuthor.ejs', {author:result});
        })
        .catch(err =>{
            res.json(err);
        });
    };

    static edit(req, res) {
        const id = +req.params.id;
        let { name, age, image } = req.body;

        author.update({
            name, age, image
        }, {
            where: {
                id
            },
        })
        .then(result => {
            if (result[0] === 1) {
                // Untuk mengarahkan halaman form input ke home authors setelah data diperbaharui
                res.redirect('/authors');

                // Untuk memberikan validasi pada postman bahwa author berhasil diperbaharui
                // res.json({
                //     message: `Id ${id} berhasil diperbaharui`,
                // });
            } else {
                // Untuk memberikan validasi pada postman bahwa author tidak berhasil diperbaharui
                res.json({
                    message: `Id ${id} tidak berihasil diperbaharui!`,
                });
            };
        })
        .catch(err => {
            res.json(err);
        });
    };
};

module.exports = AuthorController;