exports.seed = function (knex, Promise) {
  return knex('stats').del()
  .then(function () {
    return knex('stats').insert([
      {player_id: 1, stat_catalog_id: 2, how_many: 5, game_date: new Date('2016-02-28 12:00:00')},
      {player_id: 1, stat_catalog_id: 2, how_many: 5, game_date: new Date('2017-02-24 12:00:00')},
      {player_id: 1, stat_catalog_id: 2, how_many: 5, game_date: new Date('2017-02-29 12:00:00')},
      {player_id: 1, stat_catalog_id: 2, how_many: 5, game_date: new Date('2017-02-02 12:00:00')}
    ]);
  });
};
