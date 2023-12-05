const router = require('express').Router();
// Get routes
router.get('/', /*async*/ (req, res) => {
  try {
    res.render('homepage');
  } catch(err) {res.status(500).json(err)}});

router.get('/login', /*async*/ (req, res) => {
  try {
    res.render('login');
  } catch(err) {res.status(500).json(err)}});

router.get('/inventory', /*async*/ (req, res) => {
  try {
    res.render('inventory');
  } catch(err) {res.status(500).json(err)}});

router.get('/form', /*async*/ (req, res) => {
  try {
    res.render('form');
  } catch(err) {res.status(500).json(err)}});

module.exports = router;

// Route to verify that a user is logged in using session information
// once user logs in they are directed to the search page
// router.get('/', async (req, res) => {
//   try {
//     res.render('homepage', { layout: false, view: 'Animal Database' });
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });