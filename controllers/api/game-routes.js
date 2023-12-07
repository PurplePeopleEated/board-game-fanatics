const router = require('express').Router();
const {Boardgame} = require('../../models');

router.post('/inventory', async (req, res) => {
  try {
    const newGame = await Boardgame.create({...req.body, user_id: req.session.user_id});
    console.log(newGame);
    res.status(200).json(newGame);
  } catch(err) {res.status(400).json(err)}
});


module.exports = router;