const {Model, DataTypes} = require('sequelize');
const sequelize = require('../config/connection');

class User extends Model {}

User.init(
{id: {
  type: DataTypes.INTEGER,
  allowNull: false,
  autoIncrement: true,
  primaryKey: true
  },
username: {
  type: DataTypes.STRING,
  allowNull: false
},
email: {
  type: DataTypes.STRING,
  allowNull: false,
  unique: true,
  validate: {
    isEmail: true
  }
},
pass: {
  type: DataTypes.STRING,
  allowNull: false,
  validate: {
    len: [8, 20]
  }
}},
{sequelize,
timestamps: false,
freezeTableName: true,
modelName: 'user'}
);

module.exports = User;