var Bookshelf = require('../config/bookshelf.config');

// require('./Coach')
var Team = bookshelf.Model.extend({
  tableName: 'teams',
  coach: function() {
    return this.belongsTo(Coach);
  },
  players: function() {
    return this.belongsToMany(Player);
  }
});

// put team assoicaton here


module.exports = Bookshelf.model('Team', Team);
