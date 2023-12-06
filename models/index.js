const User = require('./User');
const Boardgame = require('./Boardgame');

User.hasMany(Boardgame, {foreignKey: 'user_id', onDelete: 'CASCADE'});
Boardgame.belongsTo(User, {foreignKey: 'user_id'});

module.exports = {User, Boardgame};