const express = require('express');
const app = express();
const port = 3000;
const data = require('./data/data.json').projects;

app.set('view engine', 'pug'); 
app.use('/static', express.static('public'));

/*sets up routes for pages*/
const mainRoutes = require('./routes/index');
const aboutRoutes = require('./routes/about');
const projectRoutes = require('./routes/project');


app.use(mainRoutes);
app.use('/about', aboutRoutes);
app.use('/project', projectRoutes);

/* error handlers for when the user enters in an incorrect page*/
app.use((req,res,next)=>{
    const err = new Error("Looks like this page doesn't exist =O");
    err.status = 404;
    console.log(err);
    next(err);
});
/* displays the error that is happening the page */
app.use((err,req,res,next)=>{
    res.locals.error = err;
    res.status(500);
    res.render('errors');
    console.log(err);
});



app.listen(port, ()=>
    console.log(`The application is running on local host ${port}!`)
);