const express = require ('express');
const router = express.Router();
const { data } = require('../data/data.json');
const projects = data.projects;


/*sets up the router for each project */
router.get('/:id', (req,res)=>{
    const { id } = req.params;
    const { project_name, description, technologies, live_link, github_link, image_urls } = projects[id];
    const projectTemplate = { id, project_name, description, technologies, live_link, github_link, image_urls };
    res.render('project', projectTemplate);
  });
  
  module.exports = router;