exports.up = function(knex, Promise) {
  return Promise.all([
    knex.schema.createTable('teams', function(table){
      table.increments('id').primary();
      table.string('name');
      table.string('location');
      table.integer('coach_id').unsigned();
      table.foreign('coach_id').references('id').inTable('coaches');
      table.dateTime('game_date');
      table.timestamps(true, true);
    })
  ]);
};

exports.down = function(knex, Promise) {
  return Promise.all([
    knex.schema.dropTable('teams')
  ]);
};
