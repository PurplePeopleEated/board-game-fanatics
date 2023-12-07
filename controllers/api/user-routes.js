const router = require('express').Router();
const {User} = require('../../models');

router.post('/', async (req, res) => {
  try {
    const userData = await User.create(req.body);

    req.session.save(() => {
      req.session.user_id = userData.id;
      req.session.loggin_in = true;

      console.log('Session saved');
      res.status(200).json();});
  } catch(err) {res.status(400).json(err);}});

router.post('/login', async (req, res) => {
  // Find the user who matches the posted e-mail address
  try {
    const userData = await User.findOne({where: { email: req.body.email }});
    console.log(userData);
    // if(!userData) {res.status(400).json({message: 'Incorrect email or password, please try again'});
    //   return;}
    // // Verify the posted password with the password store in the database
    // const validPassword = await userData.checkPassword(req.body.pass);
    // console.log(validPassword)
    // if (!validPassword) {res.status(400).json({message: 'Incorrect email or password, please try again'});
    //   return;}

    // Create session variables based on the logged in user
     req.session.save(() => {req.session.user_id = userData.id;req.session.logged_in = true;
      res.setHeader('Content-Type', 'application/json');
      res.json({user: userData, message: 'You are now logged in!'});});
    } catch(err) {res.status(400).json(err);}});

router.post('/logout', (req, res) => {
  // Remove the session variables
  if (req.session.logged_in) {req.session.destroy(() => {res.status(204).end();});
  } else {res.status(404).end();}});

router.post('/form', async (req, res) => {
  try {
    const newUser = await User.create({...req.body, user_id: req.session.user_id});
    console.log(newUser);
    res.status(200).json(newUser);
  } catch(err) {res.status(400).json(err);}
});

module.exports = router;