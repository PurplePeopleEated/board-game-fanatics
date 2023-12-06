const sequelize = require('../config/connection');
const {User, Boardgame} = require ('../models');

const userData = require('./userData.json');
const gameData = require('./gameData.json');

const seedDB = async () => {
  await sequelize.sync({force: true});

  const users = await User.bulkCreate(userData);

  for (const game of gameData) {
    await Boardgame.create({
      ...game,
      user_id: users[Math.floor(Math.random() * users.length)].id
    });
  } process.exit(0);
};

seedDB();