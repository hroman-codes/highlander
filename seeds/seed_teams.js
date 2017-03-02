
exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('teams').del()
    .then(function () {
      // Inserts seed entries
      return knex('teams').insert([
        {id: 1, name: 'Highlander', location: 'Bronx, NY', coach_id: 1, game_date: new Date('2016-02-28 12:00')},
        {id: 2, name: 'Gem Stars', location: 'Queens, NY', coach_id: 2, game_date: },
        {id: 3, name: 'Warriors', location: 'Brooklyn, NY', coach_id: 1, game_date: },
        {id: 4, name: 'Tigers', location: 'Bronx, NY', coach_id: 2, game_date: }
      ]);
    });
};
