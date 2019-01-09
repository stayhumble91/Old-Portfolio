console.log("working");
const express = require('express');
const ejs = require('ejs');
const nodemailer = require('nodemailer');
const path = require('path');
const bodyParser = require('body-parser');
const dotenv = require('dotenv/config');

//create express instance
const app = express();

//set view engine
app.set('view engine', 'ejs');

app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

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

//thanks page 
app.get('/thanks', (req,res) => {
    res.render('pages/thanks');
});

//send email
app.post("/send", (req,res) => {
    // console.log(req.body);
    const output = `
    You have a new message!!

        Name: ${req.body.name}
        Email: ${req.body.email}
        Company: ${req.body.company}
        Message: ${req.body.message}
    `;

    let transporter = nodemailer.createTransport({
        host: 'Gmail',
        secure: true,
        port: 465,
        auth: {
            user: process.env.USER_EMAIL,
            pass: process.env.USER_PASSWORD
        },
        tls: {
            rejectUnauthorized: false;
        }
    });
    let mailOptions = {
        from: '"Portfolio" <${osamaasaidacct@gmail.com}>', // source of email
        to: '<${osamaasaid@gmail.com}>', // list of receivers
        subject: 'Hello ✔', // Subject line
        text: output // entire email with the sender info
    };
    transporter.sendMail(mailOptions, (error, info) => {
        if(!error) {
            res.render('pages/thanks');
            // res.redirect('pages/index');
            console.log(info);
            console.log('Message sent');
        }
        else if (error) {
            console.log(error);
        }
    });
});

app.get('*', (req, res) => {
    console.error('404');
    res.status(404).render('pages/404');
});

//server

const port = process.env.PORT || 3000;
app.listen(port);
console.log(`listening on http://localhost:${port}`);
console.log('yes')
