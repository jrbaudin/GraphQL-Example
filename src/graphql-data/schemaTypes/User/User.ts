// User Type for GraphQL
import UserSettings from './UserSettings'
import UserPushTokens from './UserPushTokens'
import UserDevices from './UserDevices'
import UserFollowedLocations from './UserFollowedLocations'

const User = `
    # Example of a User object
    type User {
        id: Int!
        username: String
        email: String
        name: String
        phone: String
        guest: Boolean
        created_date: String
        timezone: String
        settings: UserSettings # The Settings saved for this User
        pushTokens: [UserPushTokens] # The Push tokens registrered for this User
        devices: [UserDevices] # The devices registrered for this User
        followedLocations: [UserFollowedLocations] # The Locations the User is following
    }
`

export default () => [
  User,
  UserSettings,
  UserPushTokens,
  UserDevices,
  UserFollowedLocations,
]
