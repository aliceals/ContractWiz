const express = require('express')
const db = require('../db')
const router = express.Router()
const hbs = require('express-handlebars')
const fetch = require('node-fetch')
const moment = require('moment');




router.get('/', (req, res) => {
    res.redirect('/home')
})

router.get('/home', (req, res) => {
    let now = moment().subtract(10, 'days').format('MMM Do YY')
    let tomorrow = moment().add(1, 'days').format('MMM Do YY')
    let twodays = moment().add(2, 'days').format('MMM Do YY')
    let threedays = moment().add(3, 'days').format('MMM Do YY')
    let fourdays = moment().add(4, 'days').format('MMM Do YY')
    let fivedays = moment().add(5, 'days').format('MMM Do YY')
    let sixdays = moment().add(6, 'days').format('MMM Do YY')
    let sevendays = moment().add(7, 'days').format('MMM Do YY')

    let dates = {
        tomorrow: tomorrow,
        twodays: twodays,
        threedays: threedays,
        fourdays: fourdays,
        fivedays: fivedays,
        sixdays: sixdays,
        sevendays: sevendays
    }

    res.render('home', dates)
})

router.post('/home', (req, res) => {
    const date = req.body
    res.redirect('/home')
})

router.get('/book', (req, res) => {
    res.render('book')
})


router.post('/book', (req, res) => {
    console.log(res.body)
})





// router.get("API/getweather", (req, res) => {
//     fetch("https://api.openweathermap.org/data/2.5/forecast/daily?q=London&mode=xml&units=metric&cnt=7")
//         .then((res) => res.json())
//         .then(json => {
//             console.log(json)
//             res.send(json)
//         })
// })

module.exports = router