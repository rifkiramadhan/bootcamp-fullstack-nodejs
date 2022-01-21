'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class book extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  book.init({
    title: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: {
          message: "Title cannot be empty!"
        }
      }
    },
    author: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: {
          message: "Author cannot be empty!"
        }
      }
    },
    released_date: {
      type: DataTypes.DATE,
      validate: {
        notEmpty: {
          message: "Date cannot be empty!"
        }
      }
    },
    pages: {
      type: DataTypes.INTEGER,
      validate: {
        notEmpty: {
          message: "Pages cannot be empty!"
        },
        isNumeric: {
          message: "Pages must be a number!"
        }
      }
    },
    genre: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: {
          message: "Genre cannot be empty!"
        }
      }
    }
  }, {
    sequelize,
    modelName: 'book',
  });
  return book;
};