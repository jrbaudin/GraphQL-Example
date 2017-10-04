import * as winston from 'winston'
import DB from '../../../database'

export const getUsers = () => {
  return DB.query(
    `SELECT id, username, email, name, phone, guest, created_date, timezone
      FROM users
      GROUP BY id
      ORDER BY name ASC`,
    { type: 'DB.QueryTypes.SELECT' }
  )
}

export const getUserWithId = (userId: Number) => {
  return new Promise((resolve, reject) => {
    DB.query(
      `
      SELECT id, username, email, name, phone, guest, created_date, timezone
      FROM users
      WHERE id = $id
      ORDER BY id DESC
      `,
      {
        bind: {
          id: userId,
        },
        type: DB.QueryTypes.SELECT,
      }
    )
      .then(user => {
        resolve(user[0])
      })
      .catch(error => {
        reject({
          message: 'ERROR When getting User from db',
          originalMessage: error.message,
        })
      })
  })
}

export const getUserSettings = (userId: Number) => {
  return new Promise((resolve, reject) => {
    DB.query(
      `
      SELECT settings
      FROM user_settings
      WHERE user_id = $user_id
      ORDER BY user_id DESC
      `,
      {
        bind: {
          user_id: userId,
        },
        type: DB.QueryTypes.SELECT,
      }
    )
      .then(userSettings => {
        if (userSettings.length === 0) {
          winston.debug(
            `No settings could be fetched for user with id '${userId}'`
          )
        }
        const settings = userSettings[0].settings
          ? userSettings[0].settings
          : {}
        // winston.debug(`userSettings[0] for user with id '${userId}' => ${JSON.stringify(settings)}`)
        resolve(settings)
      })
      .catch(error => {
        winston.debug(
          `getUserSettings(): No settings could be fetched for user with id '${userId}'`
        )
        winston.debug(`getUserSettings(): error.message => '${error.message}'`)
        resolve({})
      })
  })
}

export const getUserPushTokens = (userId: Number) => {
  return new Promise((resolve, reject) => {
    DB.query(
      `
      SELECT push_token, push_provider, created_date, app, uuid, active
      FROM user_push_tokens
      WHERE user_id = $user_id
      ORDER BY created_date DESC
      `,
      {
        bind: {
          user_id: userId,
        },
        type: DB.QueryTypes.SELECT,
      }
    )
      .then(userPushTokens => {
        if (userPushTokens.length === 0) {
          winston.debug(
            `getUserPushTokens() No Push tokens could be fetched for user with id '${userId}'`
          )
        }
        resolve(userPushTokens)
      })
      .catch(error => {
        winston.debug(
          `getUserPushTokens(): No Push tokens could be fetched for user with id '${userId}'`
        )
        winston.debug(
          `getUserPushTokens(): error.message => '${error.message}'`
        )
        resolve([])
      })
  })
}

export const getUserDevices = (userId: Number) => {
  return new Promise((resolve, reject) => {
    DB.query(
      `
      SELECT uuid, platform, created_date
      FROM user_devices
      WHERE user_id = $user_id
      ORDER BY created_date DESC
      `,
      {
        bind: {
          user_id: userId,
        },
        type: DB.QueryTypes.SELECT,
      }
    )
      .then(userDevices => {
        if (userDevices.length === 0) {
          winston.debug(
            `getUserDevices() No Devices could be fetched for user with id '${userId}'`
          )
        }
        resolve(userDevices)
      })
      .catch(error => {
        winston.error(
          `getUserDevices(): No Devices could be fetched for user with id '${userId}'`
        )
        winston.error(`getUserDevices(): error.message => '${error.message}'`)
        resolve([])
      })
  })
}

export const getUserFollowedLocations = (userId: Number) => {
  return new Promise((resolve, reject) => {
    DB.query(
      `
      SELECT id, user_id, location_id, created_date
      FROM user_followed_locations
      WHERE user_id = $user_id
      ORDER BY created_date DESC
      `,
      {
        bind: {
          user_id: userId,
        },
        type: DB.QueryTypes.SELECT,
      }
    )
      .then(userFollowedLocations => {
        if (userFollowedLocations.length === 0) {
          winston.debug(
            `getUserFollowedLocations() No Followed Locations could be fetched for user with id '${userId}'`
          )
        }
        resolve(userFollowedLocations)
      })
      .catch(error => {
        winston.debug(
          `getUserFollowedLocations(): No Followed Locations could be fetched for user with id '${userId}'`
        )
        winston.debug(
          `getUserFollowedLocations(): error.message => '${error.message}'`
        )
        resolve([])
      })
  })
}
