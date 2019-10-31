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
// server.use(express.static(__dirname + 'public'))
server.use('/public', express.static('public'));

//Routes

// server.get('/', (req, res) => {
//     res.send("Hello world")
// })

server.use('/', routes)

module.exports = server

