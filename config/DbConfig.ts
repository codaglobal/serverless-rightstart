import {Sequelize} from 'sequelize-typescript';
import {UserModel} from '../Dao/Models/User';

const DB_NAME = process.env.DATABASE_NAME;
const DB_HOST = process.env.DATABASE_HOST;
const DB_USER = process.env.DATABASE_USER;
const DB_PASSWORD = process.env.DATABASE_PASSWORD;

export class DbConfig {
  private sequelize: Sequelize;
  constructor() {
    this.sequelize = new Sequelize({
      dialect: 'mysql',
      host: DB_HOST,
      database: DB_NAME,
      username: DB_USER,
      password: DB_PASSWORD,
      port: 3306,
      benchmark: true,
      pool: {max: 5, min: 0, idle: 10000}

    });

    this.sequelize.addModels([UserModel]);

    // this.sequelize.sync({
    //     alter: true // dont do this in prod, use for local development only
    //     if necessary.
    // });

    // this.sequelize.validate();
  }
}