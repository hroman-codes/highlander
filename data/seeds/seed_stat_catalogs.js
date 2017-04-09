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






// working code

//  // stats module
//  data.teams.map(function(team){
//   //  console.log('the teams map', team)
//     team.players.map(function(player){
//       // console.log('the players map', player)
//       var playerName = player.first_name + ' ' + player.last_name;
//       var playerStats = {
//         'Hits':0,
//         'At Bats':0,
//         'Home Runs':0,
//         'Earned Runs':0,
//         'Innings Pitched':0,
//         'Strikeouts': 0
//       };
//       player.stats.map(function(stat){
//         // console.log('the stats map', stat)
//         playerStats[stat.catalog.description] = stat.how_many;
//       });
//       var row = $('<tr>');
//       row.append($('<td>', {text: playerStats['Position']}));
//       row.append($('<td>', {text: playerStats['Name']}));
//       row.append($('<td>', {text: playerStats['Hits']}));
//       row.append($('<td>', {text: playerStats['At Bats']}));
//       row.append($('<td>', {text: playerStats['Home Runs']}));
//       row.append($('<td>', {text: playerStats['Earned Runs']}));
//       row.append($('<td>', {text: playerStats['Innings Pitched']}));
//       row.append($('<td>', {text: playerStats['Strikeouts']}));
 //
//       console.log(playerName, playerStats);
//       })
//     });
