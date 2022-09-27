 

//fs stands for file server
const fs = require('fs');

//path allows you to work with directories and file paths
const path = require('path');

//allows you to use express in your app
const express = require('express');

const { notes } = require('./Develop/db/db.json');

//instantiates the server
const app = express();

//middlewares
//serves static files in express under the directory of public
app.use(express.static('public'));
//parses incoming requests
app.use(express.urlencoded({ extended: true }));
//parses incoming data and puts the parsed data in req
app.use(express.json());


app.get('/Develop/db/db.json', (req, res) => {
    res.json(notes)
});



//tells the server which port to listen on
app.listen(3002, () => {
    console.log('API server now on port 3002!')
});