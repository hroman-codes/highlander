const Bookshelf = require('../config/bookshelf.config');

require('./Team');
require('./Player');

const Coach = Bookshelf.Model.extend({
  tableName: 'coaches',
  teams: function() {
    return this.belongsToMany('Team', 'coaches_teams');
  }
});

module.exports = Bookshelf.model('Coach', Coach);
