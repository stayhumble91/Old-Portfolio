console.log("working");
const express = require('express');
const ejs = require('ejs');
const nodemailer = require('nodemailer');

//create express instance
const app = express();

//set view engine
app.set('view engine', 'ejs');

//load pages
//home page
app.get('/', (req,res) => {
    res.render('pages/index');
});
//work page
app.get('/work', (req,res) =>{
    res.render('pages/work');
})
//contact page
app.get('/contact', (req, res) => {
    res.render('pages/contact');
})







app.listen(3000);