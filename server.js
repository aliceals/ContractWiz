const express = require('express')
const hbs = require('express-handlebars')
const routes = require('./routes/routes')
const server = express()
const cookieParser = require('cookie-parser')
const session = require('express-session')
const morgan = require('morgan')
const db = require('./db')
const sessionUtils = require('./sessionutils')


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
// server.use((req, res, next) => {
//     if (req.cookies.user_sid && !req.session.username) {
//         res.clearCookie('user_sid')
//     }
//     next()
// })




//route for home-page

server.get('/', sessionUtils.sessionChecker, (req, res) => {
    res.redirect('/home')
})

//route for user signup

server.post('/register', (req, res) => {
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
            req.session.username = user.dataValues
            res.redirect('/home')
        })
        .catch(error => {
            res.redirect('/login')
        })
})


server.get('/register', (req, res) => {
    res.render('register')
})

server.get('/login', (req, res) => {
    res.render('login')
})

server.post('/login', (req, res) => {
    let username = req.body.username
    let password = req.body.password

    db.getUser(username)
        .then(data => {
            if (!data) {
                console.log("no user with this username")
                res.redirect('/login?error=nouser')
            } else {
                db.getPassword(username, password)
                    .then(data => {
                        if (!data) {
                            console.log("incorrect password")
                            res.redirect('/login')
                        } else {
                            console.log("correct username")
                            req.session.username = username
                            res.redirect('/home')
                        }
                    })
            }
        })
})



server.get('/logout', (req, res) => {
    if (req.session.username && req.cookies.user_sid) {
        res.clearCookie('user_sid');
        res.redirect('/');
    } else {
        res.redirect('/login');
    }
});

server.use('/', routes)

server.use(function (req, res, next) {
    res.status(404).send("Sorry cant find that")
})



module.exports = server

