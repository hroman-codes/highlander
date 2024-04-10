module.exports = {
  development: {
    client: 'pg',
    connection: {
      host: 'localhost',
      database: 'highlander',
      port: 5432,
      user: 'getroman.dev',
      password: '',
      charset: 'utf8'
    },
    pool: {
      min: 0,
      max: 10
    },
    migrations: {
      directory: 'data/migrations'
    },
    seeds: {
      directory: 'data/seeds'
    },
    debug: true,
    useNullAsDefault: true,
  },
  
  // production: {
  //   client: 'pg',
  //   connection: process.env.HEROKU_POSTGRESQL_ONYX_URL,
  //   pool: {
  //     min: 2,
  //     max: 10
  //   },
  //   migrations: {
  //     directory: 'data/migrations',
  //     tableName: 'knex_migrations'
  //   },
  //   seeds: {
  //     directory: 'data/prod_seeds'
  //   }
  // }
}
