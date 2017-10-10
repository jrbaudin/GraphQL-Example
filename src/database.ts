import * as Sequelize from 'sequelize'
import Config from './config'
const databaseConfig = new Config().getDatabaseConfig()

const database = databaseConfig.database
const username = databaseConfig.username
const password = databaseConfig.password
const host = databaseConfig.host
const port = databaseConfig.port

export const db = new Sequelize(database, null, null, {
  host: host,
  port: port,
  dialect: 'postgres',
  pool: {
    max: 5,
    min: 0,
    idle: 10000,
  },
  logging: false,
})

export default db
