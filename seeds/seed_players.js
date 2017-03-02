exports.seed = function(knex, Promise) {
  return knex('players').del()
  .then(function () {
    return knex('players').insert([
      {id: 1, first_name: 'Heriberto', last_name: 'Roman', email: 'romanh99@gmail.com', phoneNumber: '123-456-7890', mobileProvider: 'sprint'},
      {id: 2, first_name: 'Randy', last_name: 'Brown', email: 'brown@gmail.com', phoneNumber: '123-456-7890', mobileProvider: 'sprint'},
      {id: 3, first_name: 'Big', last_name: 'Mac', email: 'bigmac@gmail.com', phoneNumber: '123-456-7890', mobileProvider: 'sprint'},
      {id: 4, first_name: 'Ricardo', last_name: 'Roman', email: 'ricky@gmail.com', phoneNumber: '123-456-7890', mobileProvider: 'sprint'}
    ])
  })
} 
