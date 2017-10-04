import * as winston from 'winston'
import * as GraphQLServer from './graphql-server'
import Config from './config'

const config = new Config()
const environment = config.getEnv()
const loggingLevel = config.getLoggingLevel()

if (environment === 'development') {
  winston.level = loggingLevel
  winston.info(
    `Messages are now written to the Console at level '${loggingLevel}'`
  )
}

const run = async () => {
  try {
    winston.info(`app.run(): Starting GraphQL Server`)
    await GraphQLServer.start()
  } catch (error) {
    winston.error(`app.run(): Error caught! Message => ${error.message}`)
  }
}

winston.info(`Starting Karma Merchant API Application`)
run()
