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

    const data = {
        users: [],
    }

    // Create 100 users
    for (let i = 0; i < 20; i++) {
        data.users.push(casual.customer)
    }
    return data
}