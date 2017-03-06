var Bookshelf = require('../config/bookshelf.config');

var Stat = Bookshelf.Model.extend({
  tableName: 'stats',
  players: function() {
    return this.belongsToMany(Player)
  }
})

var Stat_Catalog = Bookshelf.Model.extend({
  tableName: 'stat_catalogs',
  stat: function() {
    return this.belongsTo(Stat)
  }
});

module.exports = Bookshelf.model('Stat', Stat);
module.exports = Bookshelf.model('Stat_Catalog', Stat_Catalog);
