const Bookshelf = require('../config/bookshelf.config');

const Coach = require('./Coach');
const Player = require('./Player');

const Team = Bookshelf.Model.extend({
  tableName: 'teams',
  coach: function() {
    return this.belongsToMany(Coach, 'team_id');
  },
  players: function() {
    return this.belongsToMany(Player, 'coaches_teams');
  }
});

module.exports = Team;
