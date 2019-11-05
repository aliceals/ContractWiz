const express = require('express')
const hbs = require('express-handlebars')
const routes = require('./routes/routes')
const server = express()
const cookieParser = require('cookie-parser')
const session = require('express-session')
const morgan = require('morgan')
const db = require('./db')
const bcrypt = require('bcryptjs')


//Middleware

server.engine('hbs', hbs({
    defaultLayout: 'main',
    extname: 'hbs'
}))
server.set('view engine', 'hbs')
server.use(express.urlencoded({ extended: true }))
// server.use(express.static(__dirname + 'public'))
server.use('/public', express.static('public'));
server.use(morgan('dev'))
server.use(cookieParser())


//initialize express-session to allow us track the loggen-in user across session
server.use(session({
    key: 'user_sid',
    secret: 'somerandomstuffs',
    resave: false,
    saveUninitialized: false,
    cookie: {
        expires: 600000
    }
}))

//this middleware will check if user's cookie is still saved in browser and use
//this usually happens when you stop your express server after login
server.use((req, res, next) => {
    if (req.cookies.user_sid && !req.session.user) {
        res.clearCookie('user_sid')
    }
    next()
})

//middleware function to check for logged-in users

const sessionChecker = (req, res, next) => {
    if (req.session.user && req.cookies.user_sid) {
        res.redirect('/home')
    } else {
        next()
    }
}

//route for home-page

server.get('/', sessionChecker, (req, res) => {
    res.redirect('/login')
})

//route for user signup

server.post('/register', sessionChecker, (req, res) => {
    let user = {
        userName: req.body.userName,
        userAddress: req.body.userAddress,
        userCity: req.body.userCity,
        email: req.body.email,
        phoneNumber: req.body.phoneNumber,
        password: req.body.password
    }
    db.createUser(user)
        .then(user => {
            req.session.user = user.dataValues
            res.redirect('/home')
        })
        .catch(error => {
            res.redirect('/login')
        })
})


server.get('/register', sessionChecker, (req, res) => {
    res.render('register')
})

server.get('/login', sessionChecker, (req, res) => {
    res.render('login')
})

server.post('/login', sessionChecker, (req, res) => {
    let username = req.body.username
    let password = req.body.password

    db.getUser(username)
        .then(data => {
            if (!data) {
                console.log("no user with this username")
                res.redirect('/login')
            } else {
                db.getPassword(username, password)
                    .then(data => {
                        if (!data) {
                            console.log("incorrect password")
                            res.redirect('/login')
                        } else {
                            res.redirect('/home')
                        }
                    })
            }
        })
})



server.use('/', routes)

module.exports = server

