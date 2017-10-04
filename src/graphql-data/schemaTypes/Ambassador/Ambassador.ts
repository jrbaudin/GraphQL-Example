import User from '../User/User'

// Ambassador Type for GraphQL
const Ambassador = `
    # The Ambassador is a person which helps to spread the Karma gospel
    type Ambassador {
        id: Int!
        user: User #
        created_date: String
    }
`

export default () => [Ambassador, User]
