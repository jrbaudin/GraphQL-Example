import { makeExecutableSchema } from 'graphql-tools'
import resolvers from './resolvers'
import User from './schemaTypes/User/User'

const schemaDefinition = `
    # the schema allows the following query:
    type Query {
        users: [User]
        user(userId: Int!): User # User query must receive userId as an argument
    }
`

export default makeExecutableSchema({
  typeDefs: [schemaDefinition, User],
  resolvers
})
