const express = require('express')
const hbs = require('express-handlebars')
const routes = require('./routes/routes')
const server = express()

//Middleware

server.engine('hbs', hbs({
    defaultLayout: 'main',
    extname: 'hbs'
}))
server.set('view engine', 'hbs')
server.use(express.urlencoded({ extended: true }))

//Routes

// server.get('/', (req, res) => {
//     res.send("Hello world")
// })

server.use('/', routes)

module.exports = server

