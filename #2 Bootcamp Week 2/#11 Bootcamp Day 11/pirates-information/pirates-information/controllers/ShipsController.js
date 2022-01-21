const { ships } = require('../models');

class ShipsController {
    static get(req, res) {
        ships.findAll({
            order: [
                ['id', 'ASC'],
            ],
        })
        .then(ships => {
            // Untuk menjalankan JSON API
            // res.json(ships);

            // Untuk menjalankan tampilan ejs
            res.render('ships/ships.ejs', {ships});
        })
        .catch(err => {
            res.json(err);
        });
    };

    static addPage(req, res) {
        res.render('ships/addShips.ejs');
    };

    static add(req, res) {
        let { name, type, power } = req.body;

        ships.create({
            name, type, power
        })
        .then(result => {
            // Untuk mengarahkan halaman form input ke home ships setelah data ditambahkan
            res.redirect('/ships');
            
            // Untuk memberikan validasi pada postman bahwa buku berhasil tersimpan
            // res.json({
            //     message : `Ships ${name} berhasil tersimpan.`,
            // });
        })
        .catch(err => {
            res.json(err);
        });
    };

    static findById(req, res) {
        const id = +req.params.id;

        ships.findByPk(id)
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

        ships.destroy({
            where: {
                id
            },
        })
        .then(result => {
            if (result === 1) {
                // Untuk mengarahkan halaman form input ke home ship setelah data dihapus
                res.redirect('/ships');
                
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

        ships.findOne({
            where : {
                id
            },
        })
        .then(result => {
            res.render('ships/editShips.ejs', {ships:result});
        })
        .catch(err =>{
            res.json(err);
        });
    };

    static edit(req, res) {
        const id = +req.params.id;
        let { name, type, power } = req.body;

        ships.update({
            name, type, power
        }, {
            where: {
                id
            },
        })
        .then(result => {
            if (result[0] === 1) {
                // Untuk mengarahkan halaman form input ke home ship setelah data diperbaharui
                res.redirect('/ships');

                // Untuk memberikan validasi pada postman bahwa ship berhasil diperbaharui
                // res.json({
                //     message: `Id ${id} berhasil diperbaharui`,
                // });
            } else {
                // Untuk memberikan validasi pada postman bahwa ship tidak berhasil diperbaharui
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

module.exports = ShipsController;