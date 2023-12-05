// Router starts here
const router = require('express').Router();
// Import api and main routes
const routes = require('./routes');
// const apiRoutes = require('./api');
// Use routes
router.use('/', routes);
// router.use('/api', apiRoutes);

module.exports = router;