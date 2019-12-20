const express = require ('express');
const router = express.Router();
const { data } = require('../data/data.json');
const projects = data.projects;



router.get('/:id', (req,res)=>{

    const { id } = req.params;
    const { project_name, description, technologies, live_link, github_link, image_urls } = projects[id];
 
    const projectTemplate = { id, project_name, description, technologies, live_link, github_link, image_urls };
    res.render('project', projectTemplate);
  });

  router.get('/index', (req,res)=>{
    res.render('index');
});
router.get('/about', (req,res)=>{
    res.render('about');
});
  
  module.exports = router;