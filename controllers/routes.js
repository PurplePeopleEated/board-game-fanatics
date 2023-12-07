const router = require('express').Router();
const {User, Boardgame} = require('../models');
// Get routes
router.get('/', async (req, res) => {
  try {
    res.render('homepage');
  } catch(err) {res.status(500).json(err)}});

router.get('/login', async (req, res) => {
  if (req.session.logged_in) {
    res.redirect('/inventory');
    return;}
    
  res.render('login');
});

router.get('/inventory', async (req, res) => {
  try {
    const userData = await User.findByPk(req.session.user_id, {
      attributes: {exclude: ['password']},
      include: [{model: Boardgame}]
    });

    const user = userData.get({plain: true});

    res.render('inventory', {
      ...user,
      logged_in: true
    });
  } catch(err) {res.status(500).json(err)}});

router.get('/form', async (req, res) => {
  try {
    res.render('form');
  } catch(err) {res.status(500).json(err)}});

module.exports = router;