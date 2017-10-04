import Location from '../Location/Location'

const UserFollowedLocations = `
    # These are the locations the user is following
    type UserFollowedLocations {
        id: Int
        location: Location
        created_date: String
    }
`
export default () => [UserFollowedLocations, Location]
