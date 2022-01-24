const { pirates } = require('../models');

class PirateController {
    static get(req, res) {
        pirates.findAll({
            order: [
                ['id', 'ASC'],
            ]
        })
        .then(pirate => {
            // Untuk menjalankan JSON API
            // res.json(pirate);

            // Untuk menjalankan tampilan ejs
            res.render('pirate/pirate.ejs', {pirate});
        })
        .catch(err => {
            res.json(err);
        });
    };

    static addPage(req, res) {
        res.render('pirate/addPirate.ejs');
    };

    static add(req, res) {
        let { name, status, type } = req.body;

        pirates.create({
            name, status, type
        })
        .then(result => {
            // Untuk mengarahkan halaman form input ke home pirates setelah data ditambahkan
            res.redirect('/pirates');

            // Untuk memberikan validasi pada postman bahwa pirate berhasil tersimpan
            // res.json({
            //     message : `Pirate ${name} berhasil tersimpan.`,
            // });
        })
        .catch(err => {
            res.json(err);
        });
    };

    static findById(req, res) {
        const id = +req.params.id;

        pirates.findByPk(id)
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

        pirates.destroy({
            where: {
                id
            },
        })
        .then(result => {
            if (result === 1) {
                // Untuk mengarahkan halaman form input ke home pirates setelah data dihapus
                res.redirect('/pirates');
                
                // Untuk memberikan validasi pada postman bahwa pirate berhasil dihapus
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

        pirates.findOne({
            where : {
                id
            },
        })
        .then(result => {
            res.render('pirate/editPirate.ejs', {pirate:result});
        })
        .catch(err =>{
            res.json(err);
        });
    };

    static edit(req, res) {
        const id = +req.params.id;
        let { name, status, type } = req.body;

        pirates.update({
            name, status, type
        }, {
            where: {
                id
            },
        })
        .then(result => {
            if (result[0] === 1) {
                // Untuk mengarahkan halaman form input ke home pirates setelah data diperbaharui
                res.redirect('/pirates');

                // Untuk memberikan validasi pada postman bahwa pirate berhasil diperbaharui
                // res.json({
                //     message: `Id ${id} berhasil diperbaharui`,
                // });
            } else {
                // Untuk memberikan validasi pada postman bahwa pirate tidak berhasil diperbaharui
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

module.exports = PirateController;