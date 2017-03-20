var Bookshelf = require('../config/bookshelf.config');
var Player = Bookshelf.Model.extend({
  tableName: 'players',
  teams: function() { 
    return this.belongsToMany(Team);
  },
});

module.exports = Player;
