exports.seed = function (knex, Promise) {
  return knex('teams').del()
    .then(function () {
      return knex('teams').insert([
        {id: 1, name: 'Highlanders', city: 'Bronx', state: 'NY', game_date: new Date()},
        {id: 2, name: 'Gem Stars', city: 'Queens', state: 'NY', game_date: new Date()},
        {id: 3, name: 'Warriors', city: 'Brooklyn', state: 'NY', game_date: new Date()},
        {id: 4, name: 'Tigers', city: 'Bronx', state: 'NY', game_date: new Date()}
      ]);
    });
};
