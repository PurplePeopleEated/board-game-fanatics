const router = require('express').Router();
const userRoutes = require('./user-routes');
const gameRoutes = require('./game-routes');

router.use('/users', userRoutes);
router.use('/boardgames', gameRoutes);

module.exports = router;