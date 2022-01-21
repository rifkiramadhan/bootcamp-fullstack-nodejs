'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class books extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      books.belongsTo(models.author)
    }
  };
  books.init({
    title: DataTypes.STRING,
    genre: DataTypes.STRING,
    page: DataTypes.INTEGER,
    price: DataTypes.INTEGER,
    image: DataTypes.STRING,
    authorId: DataTypes.INTEGER,
    released_date: DataTypes.DATEONLY
  }, {
    sequelize,
    modelName: 'books',
  });
  return books;
};