const express = require('express');
const app = express();
const db = require('../db');
const env = require('../env');
const help = require('../help');
const port = 3002;
app.use(express.static('public'));

app.get('/games/:uid', (req, res) => {
  var uid = req.params.uid;
  db.findGamebyId(uid, (err, game) => {
    if(err) {
      console.log(err);
      res.status(404);
    } else {
      res.status(200);
      res.send(game);
    }
  });
});

app.get('/screenshots', (req, res) => {
  res.status(200);
  res.send(help.screenshotsUrls());
});

app.get('/videos', (req, res) => {
  help.searchYouTube({
    key: env.YOUTUBE_API_KEY,
    query: 'Total War'
  },(err, data) => {
    if(err) {
      console.log(err)
      res.status(404);
      res.send(err);
    } else {
      res.status(200);
      res.send(data);
    }
  })
});

app.listen(port, (req, res) => {
  console.log('Listening to ' + port + '!');
});

