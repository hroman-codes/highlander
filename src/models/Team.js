// var knex = require ({ client: 'pg', connection: process.env.PG_CONNECTION_STRING });
var Bookshelf = require('../config/bookshelf.config');

require('./Coach')
var Team = bookshelf.Model.extend({
  tableName: 'teams',
  coach: function() {
    return this.belongsTo('Coach');
  }
});

module.exports = Bookshelf.model('Team', Team);
//PG_CONNECTION_STRING=asdasd node server.js
