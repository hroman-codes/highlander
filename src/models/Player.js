var Bookshelf = require('../config/bookshelf.config');

// Here we’re registering our User model as the string 'User'.
// Now we’ll be able to reference the User model using a string rather
// than assigning it to a variable (that’s what gets us the circular dependency
// error to begin with).
// Another thing to note is that we’re require()ing our Invoice model but not
// assigning it to a variable. The Registry plugin expects you to simply
// require the model you need as a relation, it’s perfectly fine if you don’t
// assign it to a variable (and in fact you should not assign it to a variable).

//var Team = require('./Team');

var Player = Bookshelf.Model.extend({
  tableName: 'players',
  teams: function() {
    return this.belongsToMany(Team);
  },
});

// module.exports = Bookshelf.model('Player', Player);
module.exports = Player;
