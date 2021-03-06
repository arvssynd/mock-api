const casual = require('casual')

module.exports = () => {
    casual.define('customer', function () {
        return {
            name: casual.first_name,
            surname: casual.last_name,
            address: casual.street,
            phone: casual.phone,
            email: casual.email,
            postalCode: casual.zip,
            city: casual.city,
            number: casual.building_number,
            id: casual.uuid,
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
        data.results.push(casual.customer)
    }

    return data
}