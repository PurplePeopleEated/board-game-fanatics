const homeRouter = require('express').Router();
const boardgame = require('../models/boardgame');

//GET request for home routes
homeRouter.get('/', async (req, res) => {
    try{const boardgameData = await boardgame.findAll().catch((err) => { res.json(err);});
    const boardgame = boardgameData.map((boardgame) => boardgame.get({ plain: true }));
        res.render('homepage', { boardgame });} 
    catch(err){console.error(err);res.status(500).json(err);};})

homeRouter.get('/project/:id', async (req, res) => {
    try{const boardgameData = await boardgame.findByPk(req.params.id,{include:{model:User}});   
        boardgameData.get({plain: true});res.render('boardgame', { boardgameData });} 
    catch(err){console.error(err);res.status(500).json(err);};})

module.exports = homeRouter;    