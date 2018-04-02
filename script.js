console.log("working");
const express = require('express');
const ejs = require('ejs');
const nodemailer = require('nodemailer');

//create express instance
const app = express();

//set view engine
app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/public'));


//load pages
//welcome page
app.get('/', (req,res) => {
    res.render('pages/welcome');
});

//home page
app.get('/index', (req,res) => {
    res.render('pages/index');
});
//work page
app.get('/work', (req,res) => {
    res.render('pages/work');
});
//contact page
app.get('/contact', (req, res) => {
    res.render('pages/contact');
});

app.get('*', (req, res) => {
    console.error('404');
    res.status(404).render('pages/404');
});


// app.use(function(err, req, res,next) {
//     console.error(err.stack);
//     res.status(404).render('404');
// })

app.listen(3000);