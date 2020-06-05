const jsonServer = require('json-server')
const server = jsonServer.create()
const middlewares = jsonServer.defaults()
const port = process.env.PORT || 3000

server.use(jsonServer.bodyParser)
server.use(middlewares)

server.get('/customers/index', (request, response) => {
    if (request.method === 'GET') {
        const users = require('./customers/index')
        response.status(200).jsonp(users())
    }
})

server.post('/customers/getPaginatedResult', (request, response) => {
    if (request.method === 'POST') {
        const users = require('./customers/getPaginatedResult')
        response.status(200).jsonp(users())
    }
})

server.listen(port, () => {
    console.log('JSON Server is running')
})