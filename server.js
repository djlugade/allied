const express = require('express');
const cors = require('cors')
const app = express();

const bodyParser = require('body-parser');
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
// parse application/json
app.use(bodyParser.json());

const path = require('path');

// var port = process.env.port || 3000;
var port = 3000;

//cross origin
app.use(cors({
    origin: 'http://localhost:4200',
}));

/* Database Connection */
const config = require('./config/db');
const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

mongoose.connect(config.url, { useMongoClient: true })
    .then(() => {
        console.log("Succesfully Connected", config.db);
    })
    .catch(err => console.log(err))
    /* // Database Connection */




app.use(express.static(path.join(__dirname + '/dist/')));
//app.use(express.static(path.join(__dirname + '/client/')));


//routes
const authenticate = require('./route/authentication');
const articles = require('./route/articles');
const userarticles = require('./route/userarticles');

app.use('/auth', authenticate);
app.use('/articles', articles);
app.use('/userarticles', userarticles);


app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname + '/dist/index.html'));
    // res.sendFile(path.join(__dirname + '/client/src/index.html'));
    // res.send("hello");
});

app.listen(port, (err) => {
    if (err) console.log(error);
    console.log("server Started", port);
});