const sequelize = require('../config/connection');
const {User, Boardgame} = require ('../models');

const userData = require('./userData.json');
const gameData = require('./userData.json');

const seedDB = async () => {
  await sequelize.sync({force: true});

  const users = await User.bulkCreate(userData);
};

seedDB();