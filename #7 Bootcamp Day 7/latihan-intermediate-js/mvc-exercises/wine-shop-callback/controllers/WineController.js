const Wine = require('../models/Wine');
const WineView = require('../views/WineView');

class WineController {
    static help(){
        WineView.help();
    };

    static wines(){
        // const wines = Wine.wines();
        // WineView.wines(wines);
        Wine.wines((err, data) => {
            if (err) {
                WineView.error(err);
            } else {
                WineView.wines(data);
            };
        });
    };

    static add(params){
        Wine.add(params, (err, data) => {
            if (err) {
                WineView.error(err);
            } else {
                WineView.message(data);
            };
        });
    };

    static sell(params){
        Wine.sell(params, (err, data) => {
            if (err) {
                WineView.error(err);
            } else {
                WineView.message(data);
            };
        });
    };

    static rename(params){
        Wine.rename(params, (err, data) => {
            if (err) {
                WineView.error(err);
            } else {
                WineView.message(data);
            };
        });
    };

    static findById(params){
        Wine.findById(params, (err, data) => {
            if (err) {
                WineView.error(err);
            } else {
                WineView.message(data);
            };
        });
    };

    static message(msg){
        WineView.message(msg);
    };
};

module.exports = WineController;