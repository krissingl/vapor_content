const express = require('express');
const app = express();
const db = require('../db');
const port = 3002;
app.use(express.static('public'));


app.listen(port, (req, res) => {
  console.log('Listening to ' + port + '!');
})