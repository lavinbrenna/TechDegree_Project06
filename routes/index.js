const express = require('express');
const router = express.Router();
const { data }= require('../data/data.json');
const { projects } = data;
/* redirects user from localhost:3000 to index page*/
router.get('/',(req,res)=>{
    res.redirect('index');
});

/*renders the index page and it's layout */
router.get('/index',(req,res)=>{
    console.log(projects);
    res.render('index',{ projects });
    
});

module.exports = router;