const router = require('express').Router();
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
    res.render('inventory');
  } catch(err) {res.status(500).json(err)}});

router.get('/form', async (req, res) => {
  try {
    res.render('form');
  } catch(err) {res.status(500).json(err)}});

module.exports = router;