import { makeExecutableSchema } from 'graphql-tools'

import resolvers from './resolvers'

import User from './schemaTypes/User/User'
import Ambassador from './schemaTypes/Ambassador/Ambassador'

const schemaDefinition = `
    # the schema allows the following query:
    type Query {
        users: [User]
        user(userId: Int!): User # User query must receive userId as an argument
        ambassadors: [Ambassador] # Get a list of all the Karma Ambassadors
        ambassador(ambassadorId: Int!): Ambassador # Ambassador query must receive ambassadorId as an argument
    }
`

export default makeExecutableSchema({
  typeDefs: [schemaDefinition, User, Ambassador],
  resolvers,
})
