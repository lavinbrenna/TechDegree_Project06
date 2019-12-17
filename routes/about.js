const express = require('express');
const router = express.Router();
const project = require('../data/data.json').projects;

router.get('/',(req,res)=>{
    res.render('about');
});

module.exports = router;