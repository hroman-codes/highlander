exports.seed = function(knex, Promise) {
  return knex('players').del()
  .then(function () {
    return knex('players').insert([
      {id: 1, email: 'romanh99@gmail.com', password: 'highlander', first_name: 'Heriberto', last_name: 'Roman'},
      {id: 2, email: 'brown@gmail.com', password: 'highlander', first_name: 'Randy', last_name: 'Brown'},
      {id: 3, email: 'bigmac@gmail.com', password: 'highlander', first_name: 'Big', last_name: 'Mac'},
      {id: 4, email: 'ricky@gmail.com', password: 'highlander', first_name: 'Ricardo', last_name: 'Roman'}
    ])
  })
}
