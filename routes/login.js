// const express = require('express')
// const db = require('../db')
// const router = express.Router()
// const session = require('express-session')
// const cookieParser = require('cookie-parser')
// const morgan = require('morgan')




// router.get('/login', sessionChecker, (req, res) => {
//     res.render('createUser')
// })


// router.post('/login', sessionChecker, (req, res) => {
//     let user = {
//         userName: req.body.userName,
//         userAddress: req.body.userAddress,
//         userCity: req.body.userCity,
//         email: req.body.email,
//         phoneNumber: req.body.phoneNumber,
//         password: req.body.password
//     }
//     db.createUser(user)
//         .then(user => {
//             req.session.user = user.dataValues
//             res.redirect('/home')
//         })
//         .catch(error => {
//             res.redirect('/login')
//         })
// })



// // router.post('/login', (req, res) => {
// //     let newUser = req.body
// //     console.log(newUser)
// //     db.createUser(newUser)
// //         .then(() => {
// //             res.redirect('/home')
// //         })

// // })
