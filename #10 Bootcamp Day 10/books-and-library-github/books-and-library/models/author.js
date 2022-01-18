'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class author extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      author.hasMany(models.books)
    }
  };
  author.init({
    name: DataTypes.STRING,
    age: DataTypes.INTEGER,
    image: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'author',
  });
  return author;
};