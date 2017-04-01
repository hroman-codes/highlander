exports.seed = function (knex, Promise) {
  return knex('coaches').del()
  .then(function () {
    return knex('coaches').insert([
      {id: 1, email: 'romanh99@gmail.com', password: 'highlander', first_name: 'Isaac', last_name: 'Brewman'},
      {id: 2, email: 'romanh99@gmail.com', password: 'highlander', first_name: 'Danny', last_name: 'Diaz'}
    ]);
  });
};
