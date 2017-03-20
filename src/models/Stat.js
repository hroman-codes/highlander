var Bookshelf = require('../config/bookshelf.config');

var Stat = Bookshelf.Model.extend({
  tableName: 'stats',
  players: function() {
    return this.belongsTo(Player)
  },
  catalog: function(){
    return this.hasOne(Stat_Catalog)
  }
})

var Stat_Catalog = Bookshelf.Model.extend({
  tableName: 'stat_catalogs',
  stat: function() {
    return this.belongsToMany(Player, 'stats')
  }
});

module.exports = {Stat, Stat_Catalog};
