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
    let now = moment().subtract(10, 'days').calendar()
    let tomorrow = moment().add(1, 'days').calendar()
    let twodays = moment().add(2, 'days').calendar()
    let threedays = moment().add(10, 'days').calendar()

    console.log(threedays)

    res.render('home')
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