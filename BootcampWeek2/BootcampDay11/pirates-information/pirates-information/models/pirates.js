'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class pirates extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  pirates.init({
    name: DataTypes.STRING,
    status: DataTypes.STRING,
    type: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'pirates',
  });
  return pirates;
};