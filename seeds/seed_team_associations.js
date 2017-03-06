exports.seed = function (knex, Promise) {
  return knex('team_association').del()
  .then(function () {
    return knex('team_association').insert([
      {team_id: 1, player_id: 4},
      {team_id: 2, player_id: 3},
      {team_id: 3, player_id: 2},
      {team_id: 4, player_id: 4},
      {team_id: 3, player_id: 3}
    ])
  });
};
