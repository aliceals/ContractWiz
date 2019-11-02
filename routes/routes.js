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
    fetch("http://api.openweathermap.org/data/2.5/forecast?q=Wellington,nzl&APPID=ba4745edb1c9e697fb3063cbb511b2bd")
        .then((res) => res.json())
        .then(json => {
            let weather = json.list[0].weather[0].main
            let now = moment().subtract(10, 'days').format('MMM Do YY')
            let tomorrow = moment().add(1, 'days').format('MMM Do YY')
            let twodays = moment().add(2, 'days').format('MMM Do YY')
            let threedays = moment().add(3, 'days').format('MMM Do YY')
            let fourdays = moment().add(4, 'days').format('MMM Do YY')
            let fivedays = moment().add(5, 'days').format('MMM Do YY')
            let sixdays = moment().add(6, 'days').format('MMM Do YY')
            let sevendays = moment().add(7, 'days').format('MMM Do YY')

            let data = {
                tomorrow: tomorrow,
                twodays: twodays,
                threedays: threedays,
                fourdays: fourdays,
                fivedays: fivedays,
                sixdays: sixdays,
                sevendays: sevendays,
                weather: weather
            }

            res.render('home', data)
        })




    // let pageModel = {
    //     dates =[tomorrow, twodays, threedays, fourdays, fivedays, sixdays, sevendays]
    // }




})

router.post('/home', (req, res) => {
    console.log(req.body)
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
//     fetch("http://api.openweathermap.org/data/2.5/weather?q=Wellington,nzl&APPID=ba4745edb1c9e697fb3063cbb511b2bd")
//         .then((res) => res.json())
//         .then(json => {
//             console.log(json)
//             res.send(json)
//         })
// })

module.exports = router


