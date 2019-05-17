const express = require('express');
var app = express();
var port = 3002;
app.use(express.static('public'));


app.listen(port, (req, res) => {
  console.log('Listening to ' + port + '!');
})