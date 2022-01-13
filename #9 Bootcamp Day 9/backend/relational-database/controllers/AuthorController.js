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
            res.json(authors);

            // Untuk menjalankan tampilan ejs
            // res.render('author.ejs', {authors});
        })
        .catch(err => {
            res.json(err);
        });
    };

    static addPage(req, res) {
        res.render('addAuthor.ejs');
    };

    static add(req, res) {
        let { name, age, image } = req.body;

        author.create({
            name, age, image
        })
        .then(result => {
            // Untuk menjalankan JSON API
            res.json(result);

            // Untuk mengarahkan halaman form input ke home authors setelah data ditambahkan
            // res.redirect('/authors');
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
                    message: "Task not found!",
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
                // Untuk mengarahkan halaman form input ke home authors setelah data ditambahkan
                // res.redirect('/authors');
                
                res.json({
                    message: `Id ${id} has been successfully deleted`,
                });
            } else {
                res.json({
                    message: `The id ${id} does not exist`,
                });
            };

            // res.json(result);
        })
        .catch(err => {
            res.json(err);
        });
    };

    static editPage(req, res) {
        res.render('editAuthor.ejs');
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
                res.json({
                    message: `Id ${id} has been updated`,
                });
            } else {
                res.json({
                    message: `The id ${id} has not been updated`,
                });
            };

            // res.json(result);
        })
        .catch(err => {
            res.json(err);
        });
    };
};

module.exports = AuthorController;