const casual = require('casual')

module.exports = () => {
    casual.define('city', function () {
        return {
            country: casual.country,
            countryCode: casual.country_code,
            state: casual.state,
        }
    })

    const data = {
        data: [],
        totalPages: 2,
        totalElements: 30,
        page: 1,
        elementsPerPage: 25
    }

    // Create 100 users
    for (let i = 0; i < 20; i++) {
        data.data.push(casual.city)
    }

    return data
}