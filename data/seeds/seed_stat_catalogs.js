exports.seed = function (knex, Promise) {
  return knex('stats_catalog').del()
  .then(function () {
    return knex('teams').insert([
      {id: 1, description: 'Hits'},
      {id: 2, description: 'At Bats'},
      {id: 3, description: 'Home Runs'},
      {id: 4, description: 'Earned Runs'},
      {id: 5, description: 'Innings Pitched'},
      {id: 6, description: 'Strikeouts'}
    ]);
  });
}; 
