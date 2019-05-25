const express = require('express');
const app = express();
const db = require('../db');
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
  // db.findScreenshots((err,screenshots) => {
  //   if(err) {
  //     console.log(err);
  //     res.status(404);
  //   } else {
  //     res.status(200);
  //     res.send(screenshots);
  //   }
  // });
  res.status(200);
  res.send(screenshotsUrls());
});

app.listen(port, (req, res) => {
  console.log('Listening to ' + port + '!');
});

var screenshotsUrls = () => {
  var result =[];
  for(let i = 1; i < 11; i++) {
    result.push('https://s3-us-west-1.amazonaws.com/fecsteam/Images/'+ i +'.jpeg')
  }
  return result;
}