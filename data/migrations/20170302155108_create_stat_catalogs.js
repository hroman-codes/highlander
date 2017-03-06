exports.up = function(knex, Promise) {
  return Promise.all([
    knex.schema.createTable('stat_catalogs', function(table) {
      table.increments('id').primary();
      table.integer('id').unsigned();
      table.string('description');
    });
  ]);
};

exports.down = function(knex, Promise) {
  return Promise.all([
    knex.schema.dropTable('stat_catalogs')
  ]);
};
