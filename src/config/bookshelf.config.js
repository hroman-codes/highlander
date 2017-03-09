var knex = require('knex') ('../knexfile');
var bookshelf = require('bookshelf') (knex);

bookshelf.plugin('registry');

module.exports = bookshelf;
