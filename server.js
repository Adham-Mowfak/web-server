const express = require('express');
require('dotenv').config();
const hbs = require('hbs');
const fs = require('fs');
const http = require('http');
const port = process.env.port || 5000; 
var app = express();
hbs.registerPartials(__dirname + '/views/partials');
hbs.registerHelper('getCurrentYear', ()=>{ return new Date().getFullYear()});
hbs.registerHelper('screamIt', (text)=>{ return text.toUpperCase()});
app.set('view engine','hbs');
app.use(express.static(__dirname + '/public'));
app.use((req,res,next)=>{ 
    var now = new Date().toString();
    var log = `${now}: ${req.method} ${req.url}`;   
    console.log(log);
    fs.appendFileSync('server.log', log +'\n',(err)=>{
        if (err){console.log('Unable to append to server.log')}
    })
    next(); });

// app.use((req,res,next)=>{ res.render('maintanance.hbs')});

app.get('/',(req,res)=>{

        res.render('home.hbs',{
        pageTitle:'Home Page', welcomeMessage:'Loly u r welcome to the new website' });
        
    });

app.get('/about',(req,res)=>{
        res.render('about.hbs',{
        pageTitle:'About page', welcomeMessage:'Ayla Welcome to the our Infograph'});
    });

    app.get('/project',(req,res)=>{
        res.render('project.hbs',{
        pageTitle:'Apps progressed', welcomeMessage:'I am Proud to be part from my family'});
    });

app.get('/bad',(req,res)=>{res.send({
        errMessage:'unable to handle request'
});});

app.listen(port , ()=>{console.log(`server is up on port ${port}`)
;});

module.exports = app ;
