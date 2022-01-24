const FarmModels = require('../models/FarmModels');
const FarmView = require('../views/FarmViews');

class FarmController {
  static help() {
    FarmView.help();
  };

  static show() {
    const farms = FarmModels.show();
    FarmView.show(farms);
  };

  static create(params) {
    const create = Farm.create(params);
    FarmView.message(create);
  };
};

module.exports = FarmController;