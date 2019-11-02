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
    fetch("https://api.darksky.net/forecast/6fe0e60f51867939f3313dd1351dcd17/-41.131489,174.839996")
        .then((res) => res.json())
        .then(json => {
            console.log(json.daily.data[1].icon)

            let weatherTom = json.daily.data[1].icon
            let weatherTwo = json.daily.data[2].icon
            let weatherThree = json.daily.data[3].icon
            let weatherFour = json.daily.data[4].icon
            let weatherFive = json.daily.data[5].icon
            let weatherSix = json.daily.data[6].icon
            let weatherSeven = json.daily.data[7].icon



            let now = moment().subtract(10, 'days').format('MMM Do YY')
            let tomorrow = moment().add(1, 'days').format('MMM Do YY')
            let twodays = moment().add(2, 'days').format('MMM Do YY')
            let threedays = moment().add(3, 'days').format('MMM Do YY')
            let fourdays = moment().add(4, 'days').format('MMM Do YY')
            let fivedays = moment().add(5, 'days').format('MMM Do YY')
            let sixdays = moment().add(6, 'days').format('MMM Do YY')
            let sevendays = moment().add(7, 'days').format('MMM Do YY')

            let data = {
                dates: { tomorrow, twodays, threedays, fourdays, fivedays, sixdays, sevendays },
                weather: {
                    weatherTom, weatherTwo, weatherThree, weatherFour, weatherFive, weatherSix, weatherSeven
                },
                // temp: { maxTempTom }
            }

            res.render('home', data)
        })

})




// router.get('/home', (req, res) => {
//     fetch("http://api.openweathermap.org/data/2.5/forecast?q=Wellington,nzl&units=metric&APPID=ba4745edb1c9e697fb3063cbb511b2bd")
//         .then((res) => res.json())
//         .then(json => {
//             let weatherTom = json.list[1].weather[0].main
//             let weatherTwo = json.list[2].weather[0].main
//             let weatherThree = json.list[3].weather[0].main
//             let weatherFour = json.list[4].weather[0].main
//             let weatherFive = json.list[5].weather[0].main
//             let weatherSix = json.list[0].weather[0].main
//             let weatherSeven = json.list[1].weather[0].main
//             let maxTempTom = json.list[1].main.temp_max

//             let now = moment().subtract(10, 'days').format('MMM Do YY')
//             let tomorrow = moment().add(1, 'days').format('MMM Do YY')
//             let twodays = moment().add(2, 'days').format('MMM Do YY')
//             let threedays = moment().add(3, 'days').format('MMM Do YY')
//             let fourdays = moment().add(4, 'days').format('MMM Do YY')
//             let fivedays = moment().add(5, 'days').format('MMM Do YY')
//             let sixdays = moment().add(6, 'days').format('MMM Do YY')
//             let sevendays = moment().add(7, 'days').format('MMM Do YY')

//             let data = {
//                 dates: { tomorrow, twodays, threedays, fourdays, fivedays, sixdays, sevendays },
//                 weather: {
//                     weatherTom, weatherTwo, weatherThree, weatherFour, weatherFive, weatherSix, weatherSeven
//                 },
//                 temp: { maxTempTom }
//             }

//             res.render('home', data)
//         })




//     // let pageModel = {
//     //     dates =[tomorrow, twodays, threedays, fourdays, fivedays, sixdays, sevendays]
//     // }




// })

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


