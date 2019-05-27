var request = require('request');

var searchYouTube = ({key, query}, callback) => {

  var url = 'https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=3&type=video&videoEmbeddable=true&q='+ query + '&key=' + key;
  request.get(url, (err, res, body) => {
    if(err) {
      callback(err);
    } else {
      callback(null, body);
    }
  });
};

var screenshotsUrls = () => {
  var result =[];
  for(let i = 1; i < 11; i++) {
    result.push('https://s3-us-west-1.amazonaws.com/fecsteam/Images/'+ i +'.jpeg')
  }
  return result;
}
module.exports.searchYouTube = searchYouTube;
module.exports.screenshotsUrls = screenshotsUrls;