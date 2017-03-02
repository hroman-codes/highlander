
exports.up = function(knex, Promise) {
  return Promise.all([
    knex.schema.createTable('team_associations', function(table) {
      // table.increments('team_id').primary(); <== no primary key so no need for this right?
      table.integer('team_id').unsigned();
      table.foreign('team_id').references('teams.id');
      table.integer('player_id').unsigned();
      table.foreign('player_id').references('players.id');
      table.timestamps(true, true);
    });
  ]);
};

exports.down = function(knex, Promise) {
  return Promise.all([
    knex.schema.dropTable('team_associations')
  ]);
};
