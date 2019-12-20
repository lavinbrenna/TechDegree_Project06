const express = require('express');
const app = express();
const port = 3000;
const data = require('./data/data.json').projects;

app.set('view engine', 'pug'); 
app.use('/static', express.static('public'));

const mainRoutes = require('./routes/index');
const aboutRoutes = require('./routes/about');
const projectRoutes = require('./routes/project');
const errorRoutes = require('./routes/errors');

app.use(mainRoutes);
app.use('/about', aboutRoutes);
app.use('/project', projectRoutes);
app.use('/errors', errorRoutes);


app.use((err,req,res,next)=>{
    res.locals.error = err;
    res.status(500);
    res.render('errors');
});

app.listen(port, ()=>
    console.log(`The application is running on local host ${port}!`)
);