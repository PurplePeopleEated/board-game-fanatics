const {Model, DataTypes} = require('sequelize');
const sequelize = require('../config/connection');

class Boardgame extends Model {}

Boardgame.init(
{id: {
  type: DataTypes.INTEGER,
  allowNull: false,
  primaryKey: true,
  autoIncrement: true
},
title: {
  type: DataTypes.STRING,
  allowNull: false
},
min: {
  type: DataTypes.INTEGER,
  allowNull: false
},
max: {
  type: DataTypes.INTEGER,
  allowNull: false
},
timeToPlay: {
  type: DataTypes.INTEGER,
  allowNull: false
},
user_id: {
  type: DataTypes.INTEGER,
  references: {
    model: 'user',
    key: 'id'
  }
}
},
{
sequelize,
timestamps: false,
freezeTableName: true,
modelName: 'boardgame',
});

module.exports = Boardgame;