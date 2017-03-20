const Bookshelf = require('../config/bookshelf.config');

const Team = require('./Team');
const Player = require('./Player');

const Coach = Bookshelf.Model.extend({
  tableName: 'coaches',
  coach: function() {
    return this.belongsToMany(Coach, 'coaches_teams')
  },
  teams: function() {
    return this.belongsToMany(Team, 'coaches_teams');
  }
  // players: function() {
  //   return this.belongsToMany(Player, 'teams_players');
  // }
});

module.exports = Coach;
