'use strict';
const {
  Model
} = require('sequelize');

const { encryptPwd } = require('../helpers/bcrypt');

module.exports = (sequelize, DataTypes) => {
  class user extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      user.hasMany(models.item);
    }
  }
  user.init({
    email: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: {
          message: "Email must not be empty!."
        },
        isEmail: {
          message: "Must email format!."
        }
      }
    },
    password: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: {
          message: "Password must not be empty!."
        }
      }
    },
    username: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: {
          message: "Username must not be empty!."
        }
      }
    },
    avatar: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: {
          message: "Avatar must not be empty!."
        }
      }
    },
    role: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: {
          message: "Role must not be empty!."
        }
      }
    }
  }, {
    hooks: {
      beforeCreate: function(user, options) {
        user.password = encryptPwd(user.password);
      }
    },
    sequelize,
    modelName: 'user',
  });
  return user;
};