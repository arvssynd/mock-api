const casual = require('casual')

module.exports = () => {
    casual.define('city', function () {
        return {
            country: casual.country,
            countryCode: casual.country_code,
            state: casual.state,
        }
    })

    // const data = {
    //     data: [],
    //     totalPages: 2,
    //     totalElements: 30,
    //     page: 1,
    //     elementsPerPage: 25
    // }

    const data = {
        results: [],
        // totalPages: 2,
        count: 150,
        next: 'http://127.0.0.1:8000/v1/items/?includeProperties=false&page=2',
        previous: 'http://127.0.0.1:8000/v1/items/?includeProperties=false&page=2'
        // page: 1,
        // elementsPerPage: 25
    }

    // Create 100 users
    for (let i = 0; i < 20; i++) {
        data.results.push(casual.city)
    }

    return data
}