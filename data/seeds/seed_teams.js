exports.seed = function (knex, Promise) {
  return knex('teams').del()
    .then(function () {
      return knex('teams').insert([
        {id: 1, name: 'Highlanders', location: 'Bronx, NY', game_date: new Date()},
        {id: 2, name: 'Gem Stars', location: 'Queens, NY', game_date: new Date()},
        {id: 3, name: 'Warriors', location: 'Brooklyn, NY', game_date: new Date()},
        {id: 4, name: 'Tigers', location: 'Bronx, NY', game_date: new Date()}
        // {id: 1, coach_id: 1, name: 'Highlanders', location: 'Bronx, NY', game_date: new Date()},
        // {id: 2, coach_id: 2, name: 'Gem Stars', location: 'Queens, NY', game_date: new Date()},
        // {id: 3, coach_id: 1, name: 'Warriors', location: 'Brooklyn, NY', game_date: new Date()},
        // {id: 4, coach_id: 2, name: 'Tigers', location: 'Bronx, NY', game_date: new Date()}
      ]);
    });
};
