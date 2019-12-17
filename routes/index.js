const express = require('express');
const router = express.Router();
const project= require('../data/data.json');


router.get('/index',(req,res)=>{
    const indexTemplate = { project };
    res.render('index',indexTemplate);
    
})
module.exports = router;