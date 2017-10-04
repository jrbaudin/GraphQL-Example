import * as winston from 'winston'
import DB from '../../../database'

export const getLocationWithId = (locationId: Number) => {
  return new Promise((resolve, reject) => {
    DB.query(
      `
      SELECT
        id,
        name,
        latitude,
        longitude,
        address,
        zip,
        country,
        city,
        created_date,
        timezone,
        tint_color,
        description,
        company_id,
        currency,
        currency_string,
        phone,
        website,
        website_short,
        karma_cut_percentage,
        internal_deal_incrementer,
        hidden,
        deleted,
        locked
      FROM locations
      WHERE id = $id
      ORDER BY id DESC
      `,
      {
        bind: {
          id: locationId,
        },
        type: DB.QueryTypes.SELECT,
      }
    )
      .then(location => {
        resolve(location[0])
      })
      .catch(error => {
        reject({
          message: `ERROR When getting Location with id '${locationId}' from db`,
          originalMessage: error.message,
        })
      })
  })
}
