
exports.up = function(knex, Promise) {
  return Promise.all([
    knex.schema.createTable('teams', function(table){
      table.increments();
      table.string('name');
      table.timestamps(true, true);
      table.integer('coach_id').unsigned();
      table.foreign('coach_id').references('Coaches.id');
    })
  ]);  
};

exports.down = function(knex, Promise) {
  return Promise.all([
    knex.schema.dropTable('teams')
  ]);
};
