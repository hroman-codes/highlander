'use strict';
var Bookshelf = require('../config/bookshelf.config');

var Coach = Bookshelf.Model.extend({
  tableName: 'coaches',
  teams: function() {
    return this.hasMany('Team');
  }
});

module.exports = Bookshelf.model('Coach', Coach);
