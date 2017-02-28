var knex = require ({ client: 'pg', connection: process.env.PG_CONNECTION_STRING });
var bookshelf = require('.bookshelf');

var Team = bookshelf.model.extend({
  tableName: 'teams',
  coach: function() {
    return this.belongsTo(Coach)
  }
})

var Coach = bookshelf.model.extend({
  tableName: 'coaches',
  team: function() {
    return this.hasMany(Team)
  }
})

//PG_CONNECTION_STRING=asdasd node server.js
