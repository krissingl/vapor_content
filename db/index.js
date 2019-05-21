var Sequelize = require('sequelize');

var sequelize = new Sequelize("steam", "root", "pass", {
  host: 'localhost',
  dialect: 'mysql'
});


var Game = sequelize.define('game', {
  id: {
    type: Sequelize.INTEGER,
    allowNull: false,
    autoIncrement: true,
    primaryKey: true
  },
  name: Sequelize.STRING,
  description: Sequelize.TEXT,
  head_url: Sequelize.STRING,
  release_date: Sequelize.DATE,
  developer: Sequelize.STRING,
  publisher: Sequelize.STRING,
  negative_review_count: Sequelize.INTEGER,
  positive_review_count: Sequelize.INTEGER,
  recent_negative_count: Sequelize.INTEGER,
  recent_positive_count: Sequelize.INTEGER
});

sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });

  Game.sync({ force: false, logging: false }).then(() => {
    console.log('Game table synced');
  });

  findGamebyId = (id, callback) => {
    Game.findOne({
      where: {
        id: id
      }
    })
    .then(game => {
      callback(null, JSON.stringify(game));
    })
    .catch(err => {
      callback(err);
    })
  }
  module.exports.findGamebyId = findGamebyId;
  module.exports.Game = Game;