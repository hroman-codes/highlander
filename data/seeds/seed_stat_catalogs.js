exports.seed = function (knex, Promise) {
  return knex('stat_catalogs').del()
  .then(function () {
    return knex('stat_catalogs').insert([
      {id: 1, description: 'Hits'},
      {id: 2, description: 'At Bats'},
      {id: 3, description: 'Home Runs'},
      {id: 4, description: 'Earned Runs'},
      {id: 5, description: 'Innings Pitched'},
      {id: 6, description: 'Strikeouts'}
    ]);
  });
};
