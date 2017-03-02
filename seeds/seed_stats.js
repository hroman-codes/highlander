exports.seed = function (knex, Promise) {
  return knex('stats').del()
  .then(function () {
    return knex('stats').insert([
      {player_id: 1, stat_catalog_id: 2, how_many: 5, game_date: '16-06-2017'},
      {player_id: 1, stat_catalog_id: 2, how_many: 5, game_date: '16-06-2017'},
      {player_id: 1, stat_catalog_id: 2, how_many: 5, game_date: '16-06-2017'},
      {player_id: 1, stat_catalog_id: 2, how_many: 5, game_date: '16-06-2017'}
    ]);
  });
};
