const {Model, DataTypes} = require('sequelize');
const sequelize = require('../config/connection');

class Boardgame extends Model {}

Boardgame.init();

module.exports = Boardgame;