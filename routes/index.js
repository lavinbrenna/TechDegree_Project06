const express = require('express');
const router = express.Router();
const { data }= require('../data/data.json');
const { projects } = { data }.projects;


router.get('/index',(req,res)=>{
    console.log({ projects });
    res.render('index',{ projects });
    
});
router.get('about', (req,res)=>{
    res.render('about');
})
module.exports = router;