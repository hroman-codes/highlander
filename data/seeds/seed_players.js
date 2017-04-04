exports.seed = function(knex, Promise) {
  return knex('players').del()
  .then(function () {
    return knex('players').insert([
      {id: 1, email: 'romanh99@gmail.com', password: 'highlander', first_name: 'Heriberto', last_name: 'Roman', position: '1st base'},
      {id: 2, email: 'brown@gmail.com', password: 'highlander', first_name: 'Randy', last_name: 'Brown', position: '2nd base'},
      {id: 3, email: 'bigmac@gmail.com', password: 'highlander', first_name: 'Big', last_name: 'Mac', position: '3rd base'},
      {id: 4, email: 'ricky@gmail.com', password: 'highlander', first_name: 'Ricardo', last_name: 'Roman', position: 'catcher'}
    ])
  })
}
