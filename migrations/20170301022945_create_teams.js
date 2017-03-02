
exports.up = function(knex, Promise) {
  return Promise.all([
    knex.schema.createTable('teams', function(table){
      table.increments('id').primary();
      table.string('name');
      table.string('location');
      table.integer('coach_id').unsigned(); // i read some where that you need to call the unsigned() before .references()
      table.foreign('coach_id').references('Coaches.id');
      table.timestamps(true, true); // date time
    })
  ]);
};

exports.down = function(knex, Promise) {
  return Promise.all([
    knex.schema.dropTable('teams')
  ]);
};
