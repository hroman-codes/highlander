exports.up = function(knex, Promise) {
  return Promise.all([
    knex.schema.createTable('stats', function(table) {
      table.integer('player_id').unsigned();
      table.foreign('player_id').references('players.id');
      table.integer('stat_catalog_id').unsigned();
      table.foreign('stat_catalog_id').references('stat_catalogs.id');
      table.integer('how_many');
      table.datetime('game_date');
    })
  ])
};

exports.down = function(knex, Promise) {
  return Promise.all([
    knex.schema.dropTable('stats')
  ]);
};
