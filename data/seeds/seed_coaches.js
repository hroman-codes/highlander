exports.seed = function (knex, Promise) {
  return knex('coaches').del()
  .then(function () {
    return knex('coaches').insert([
      {id: 1, first_name: 'Isaac', last_name: 'Brewman'},
      {id: 2, first_name: 'Danny', last_name: 'Diaz'}
    ]);
  });
}; 
