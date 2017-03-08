module.exports = {

  development: {
    client: 'sqlite3',
    connection: {
      filename: './dev.sqlite3'
    },
    migrations: {
      directory: 'data/migrations'
    },
    seeds: {
      directory: 'data/seeds'
    },
    useNullAsDefault: true
  },

  staging: {
    client: 'postgresql',
    connection: {
      database: 'highlander',
      user:     'iamromanh',
      password: 'password'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations',
      directory: 'data/migrations'
    },
    seeds: {
      directory: 'data/seeds'
    }
  },

  production: {
    client: 'postgresql',
    connection: {
      database: 'highlander',
      user:     'username',
      password: 'password'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      directory: 'data/migrations',
      tableName: 'knex_migrations'
    },
    seeds: {
      directory: 'data/seeds'
    }
  }
};
