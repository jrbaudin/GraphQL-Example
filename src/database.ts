import * as Sequelize from 'sequelize'
import Config from './config'
const databaseConfig = new Config().getDatabaseConfig()

const database = databaseConfig.database
const username = databaseConfig.username
const password = databaseConfig.password
const host = databaseConfig.host

export const db = new Sequelize(database, username, password, {
  host: host,
  dialect: 'postgres',
  pool: {
    max: 5,
    min: 0,
    idle: 10000,
  },
  logging: false,
})

export default db
