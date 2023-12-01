const router = require('express').Router();
const Project = require('../models/boardgame');

//GET request for home routes
router.get('/', async (req, res) => {
    try{const boardgameData = await Project.findAll().catch((err) => { res.json(err);});
    const boardgame = boardgameData.map((boardgame) => boardgame.get({ plain: true }));
        res.render('homepage', { boardgame });} 
    catch(err){res.status(500).json(err);};})

router.get('/project/:id', async (req, res) => {
    try{const boardgameData = await boardgame.findByPk(req.params.id,{include:{model:User}});   
        boardgameData.get({plain: true});res.render('boardgame', { boardgameData });} 
    catch(err){res.status(500).json(err);};})