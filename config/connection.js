const Sequelize = require('sequelize');
require('dotenv').config();

let sequelize;

if (process.env.DATABASE_URL) {
  // const host = process.env.DATABASE_URL.split('//')[1].split(':')[0];
  console.log(DATABASE_URL);
  sequelize = new Sequelize(process.env.DATABASE_URL, {
    dialect: 'mysql',
    protocol: 'mysql',
    host: host
  });
} else {
  sequelize = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PASSWORD,
    {
      host: 'localhost',
      dialect: 'mysql',
      port: 5000
    }
  );
}

module.exports = sequelize;