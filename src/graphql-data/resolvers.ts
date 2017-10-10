import {
  getUsers,
  getUserSettings,
  getUserWithId,
  getUserPushTokens,
  getUserDevices,
  getUserFollowedLocations,
} from './database/connectors/userConnector'

import { getLocationWithId } from './database/connectors/locationConnector'

const resolveFunctions = {
  Query: {
    users() {
      return getUsers()
    },
    user(_, { userId }) {
      return getUserWithId(userId)
    }
  },
  User: {
    settings(user) {
      return getUserSettings(user.id)
    },
    pushTokens(user) {
      return getUserPushTokens(user.id)
    },
    devices(user) {
      return getUserDevices(user.id)
    },
    followedLocations(user) {
      return getUserFollowedLocations(user.id)
    }
  },
  UserFollowedLocations: {
    location(root) {
      return getLocationWithId(root.location_id)
    },
  }
}

export default resolveFunctions
