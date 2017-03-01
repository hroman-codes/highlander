
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('teams').del()
    .then(function () {
      // Inserts seed entries
      return knex('teams').insert([
        {id: 1, name: 'raptors', coach_id: 1},
        {id: 2, name: 'hornets', coach_id: 2},
        {id: 3, name: 'all-stars', coach_id: 3}
      ]);
    });
};
