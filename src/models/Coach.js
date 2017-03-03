// var knex = require ({ client: 'pg', connection: process.env.PG_CONNECTION_STRING });
var Bookshelf = require('../config/bookshelf.config');

var Coach = Bookshelf.Model.extend({
  tableName: 'coaches',
  team: function() {
    return this.hasMany('Team');
  }
});

module.exports = Bookshelf.model('Coach', Coach);
