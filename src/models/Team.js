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

var Team_Association = bookshelf.Model.extend({
  tableName: 'team_associations',
  team: function() {
    return this.belongsTo
  },
  player: function() {
    return this.belongsTo
  }
})
// put team assoicaton here


module.exports = Bookshelf.model('Team', Team);
