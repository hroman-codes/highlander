
exports.up = function(knex, Promise) {
  return Promise.all([
    knex.schema.createTable('players', function(table) {
      table.increments();
      table.string('firstName');
      table.string('lastName');
      table.string('email');
      table.string('string');
      table.string('mobileProvider');
    })
  ])
};

exports.down = function(knex, Promise) {
  return Promise.all([
    knex.schema.dropTable('players')
  ]);
};
