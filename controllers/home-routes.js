const router = require('express').Router();
const Project = require('../models/Projects');

router.get('/', async (req, res) => {
    try{
    const projectData = await Project.findAll().catch((err) => { 
        res.json(err);
      });
        const projects = projectData.map((project) => project.get({ plain: true }));
        res.render('homepage', { projects });} 
    catch(err){
        res.status(500).json(err);
    };})

router.get('/project/:id', async (req, res) => {
    try{
        const projectData = await Project.findByPk(req.params.id,{include:{model:User}});   
        projectData.get({plain: true});
        res.render('project', { projectData });} 
    catch(err){
        res.status(500).json(err);
    };})