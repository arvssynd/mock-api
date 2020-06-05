const casual = require('casual')

module.exports = () => {
    casual.define('product', function () {
        return {
            name: casual.name,
            description: casual.description
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
        data.data.push(casual.product)
    }

    return data
}