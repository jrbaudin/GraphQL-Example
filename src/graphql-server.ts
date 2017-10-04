import * as cors from 'cors'
import * as winston from 'winston'
import * as express from 'express'
import * as bodyParser from 'body-parser'
import * as jwt from 'express-jwt'
import { readFileSync } from 'fs'
import { join } from 'path'
import { graphqlExpress, graphiqlExpress } from 'graphql-server-express'
import { createServer } from 'http'
import { printSchema } from 'graphql/utilities/schemaPrinter'
// import { SubscriptionServer } from 'subscriptions-transport-ws'
// import { subscriptionManager } from './graphql-data/subscriptions'

import schema from './graphql-data/schema'
import Config from './config'

const serverConfig = new Config().getServerConfig()

export const start = () => {
  return new Promise((resolve, reject) => {
    try {
      // Configuration Parameters
      const GRAPHQL_PORT = serverConfig.ports.graphql
        ? serverConfig.ports.graphql
        : 8080
      const WS_PORT = serverConfig.ports.websocket
        ? serverConfig.ports.websocket
        : 8090

      const graphQLServer = express()

      /* // FIXES CORS ERROR
      const whitelist = [
        'http://localhost:3000',
        'http://localhost:4500',
        'http://localhost:5000',
      ]
      const corsOptions = {
        origin: function(origin, callback) {
          const originIsWhitelisted = whitelist.indexOf(origin) !== -1
          callback(null, originIsWhitelisted)
        },
        credentials: true,
      }
      graphQLServer.use(cors(corsOptions)) */

      graphQLServer.use(cors())

      graphQLServer.use(
        '/graphql',
        bodyParser.json(),
        graphqlExpress({
          schema,
          context: {},
        })
      )

      graphQLServer.use(
        '/graphiql',
        graphiqlExpress({
          endpointURL: '/graphql',
        })
      )

      graphQLServer.use('/schema', (req, res) => {
        res.set('Content-Type', 'text/plain')
        res.send(printSchema(schema))
      })

      graphQLServer.listen(GRAPHQL_PORT, () => {
        winston.info(
          `GraphQLServer.start(): GraphQL Server is now running on http://localhost:${GRAPHQL_PORT}/graphql`
        )
        resolve()
      })

      // WebSocket server for subscriptions
      /*const websocketServer = createServer((request, response) => {
        response.writeHead(404)
        response.end()
      })

      websocketServer.listen(WS_PORT, () => winston.info(
        `GraphQLServer.start(): Websocket Server is now running on http://localhost:${WS_PORT}`
      ))

      new SubscriptionServer(
        { subscriptionManager },
        websocketServer
      )*/
    } catch (error) {
      reject(error)
    } finally {
      resolve()
    }
  })
}
