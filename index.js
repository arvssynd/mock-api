const jsonServer = require('json-server')
const server = jsonServer.create()
const middlewares = jsonServer.defaults()
const port = process.env.PORT || 3000

server.use(jsonServer.bodyParser)
server.use(middlewares)

server.get('/customers/index', (request, response) => {
    if (request.method === 'GET') {
        const result = require('./customers/index')
        response.status(200).jsonp(result())
    }
})

server.post('/customers/getPaginatedResult', (request, response) => {
    if (request.method === 'POST') {
        const result = require('./customers/getPaginatedResult')
        response.status(200).jsonp(result())
    }
})

server.post('/products/getPaginatedResult', (request, response) => {
    if (request.method === 'POST') {
        const result = require('./products/getPaginatedResult')
        response.status(200).jsonp(result())
    }
})

server.post('/cities/getPaginatedResult', (request, response) => {
    if (request.method === 'POST') {
        const result = require('./cities/getPaginatedResult')
        response.status(200).jsonp(result())
    }
})

server.listen(port, () => {
    console.log('JSON Server is running')
})