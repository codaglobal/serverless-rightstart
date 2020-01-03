module.exports = {
  "development": {
    "username": "root",
    "password": null,
    "database": "rightstart_serverless",
    "host": "127.0.0.1",
    "dialect": "mysql",
    "operatorsAliases": false
  },
  "test": {
    "username": process.env.DATABASE_USER,
    "password": process.env.DATABASE_PASSWORD,
    "database": process.env.DATABASE_NAME,
    "host": process.env.DATABASE_HOST,
    "dialect": "mysql",
    "operatorsAliases": false
  },
  "production": {
    "username": "root",
    "password": null,
    "database": "database_production",
    "host": "127.0.0.1",
    "dialect": "mysql",
    "operatorsAliases": false
  },
  "test2": {
    "username": "admin",
    "password": "CeoAouRKO2mdX1sLfWfh",
    "database": "serverless_rightstart_db",
    "host": "serverless-rightstart-db.cofgknbjjhtk.us-east-1.rds.amazonaws.com",
    "dialect": "mysql",
    "operatorsAliases": false
  }
}
