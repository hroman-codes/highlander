exports.seed = function(knex, Promise) {
  return knex('players').del()
  .then(function () {
    return knex('players').insert([
      {id: 1, email: 'romanh99@gmail.com', first_name: 'Heriberto', last_name: 'Roman'},
      {id: 2, email: 'brown@gmail.com', first_name: 'Randy', last_name: 'Brown'},
      {id: 3, email: 'bigmac@gmail.com', first_name: 'Big', last_name: 'Mac'},
      {id: 4, email: 'ricky@gmail.com', first_name: 'Ricardo', last_name: 'Roman'}
    ])
  })
}
