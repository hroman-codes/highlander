exports.seed = function (knex, Promise) {
  return knex('teams').del()
    .then(function () {
      return knex('teams').insert([
        {id: 1, name: 'Highlander', location: 'Bronx, NY', coach_id: 1},
        {id: 2, name: 'Gem Stars', location: 'Queens, NY', coach_id: 2},
        {id: 3, name: 'Warriors', location: 'Brooklyn, NY', coach_id: 1},
        {id: 4, name: 'Tigers', location: 'Bronx, NY', coach_id: 2}
      ]);
    });
};
