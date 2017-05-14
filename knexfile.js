DATABASE_URL = 'postgres://dgeblrjcmnovie:99a1fcce2305b622eab57f7d7dc5a022da3dc7f802d736cc3b4dcff24f75ebee@ec2-23-23-223-2.compute-1.amazonaws.com:5432/d1dmfln8ki4jln'?ssl=true''

module.exports = {
  development: {
    client: 'postgresql',
    // connection: {
    //   database: 'highlander',
    //   user: 'iamromanh',
    //   password: 'bananabanana99',
    //   charset: 'utf8'
    // },
    connection: DATABASE_URL
    migrations: {
      directory: 'data/migrations'
    },
    seeds: {
      directory: 'data/seeds'
    },
    debug: true,
    useNullAsDefault: true,
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
    ssl: true,
    seeds: {
      directory: 'data/seeds'
    }
  },

  production: {
    client: 'postgresql',
    connection: {
      database: 'postgres://ec2-23-23-223-2.compute-1.amazonaws.com:5432/d1dmfln8ki4jln',
      user: 'dgeblrjcmnovie',
      password: '99a1fcce2305b622eab57f7d7dc5a022da3dc7f802d736cc3b4dcff24f75ebee'
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
}
