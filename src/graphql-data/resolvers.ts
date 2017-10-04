import {
  getUsers,
  getUserSettings,
  getUserWithId,
  getUserPushTokens,
  getUserDevices,
  getUserFollowedLocations,
} from './database/connectors/userConnector'

import { getLocationWithId } from './database/connectors/locationConnector'

import {
  getAmbassadors,
  getAmbassadorWithId,
  getAmbassadorWithUserId,
} from './database/connectors/ambassadorsConnector'

const resolveFunctions = {
  Query: {
    users() {
      return getUsers()
    },
    user(_, { userId }) {
      return getUserWithId(userId)
    },
    ambassadors() {
      return getAmbassadors()
    },
    ambassador(_, { ambassadorId }) {
      return getAmbassadorWithId(ambassadorId)
    },
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
    },
    ambassadorStatus(user) {
      return getAmbassadorWithUserId(user.id)
    },
  },
  UserFollowedLocations: {
    location(root) {
      return getLocationWithId(root.location_id)
    },
  },
  Ambassador: {
    user(root) {
      return getUserWithId(root.user_id)
    },
  },
}

export default resolveFunctions
