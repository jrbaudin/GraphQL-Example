// Location Type for GraphQL
const Location = `
    # The Location type is used for representing a physical place
    type Location {
        id: Int!
        name: String
        latitude: String
        longitude: String
        adress: String
        zip: String
        country: String
        city: String
        created_date: String
        timezone: String
        tint_color: String
        description: String
        company_id: String # Should be a Company type
        currency: String
        currency_string: String
        phone: String
        website: String
        website_short: String
        internal_deal_incrementer: Int
        hidden: Boolean
        deleted: Boolean
        locked: Boolean
    }
`

export default Location
