const express = require('express')
const db = require('../db')
const router = express.Router()
const hbs = require('express-handlebars')
const fetch = require('node-fetch')


router.get('/', (req, res) => {
    res.redirect('/home')
})

router.get('/home', (req, res) => {
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