var Sequelize = require('sequelize');

var db = new Sequelize("steam", "root", "pass");


// var Game = db.define('Game', {
//   name: Sequelize.STRING,
//   description: Sequelize.STRING,
//   head_url: Sequelize.STRING,
//   developer: Sequelize.STRING,
//   publisher: Sequelize.STRING,
//   review_count: Sequelize.INTEGER
// });