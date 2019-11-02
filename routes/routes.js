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
            moment.locale('en-nz')

            let weatherTom = json.daily.data[1].icon
            let weatherTwo = json.daily.data[2].icon
            let weatherThree = json.daily.data[3].icon
            let weatherFour = json.daily.data[4].icon
            let weatherFive = json.daily.data[5].icon
            let weatherSix = json.daily.data[6].icon
            let weatherSeven = json.daily.data[7].icon

            let tempTomHigh = json.daily.data[1].temperatureHigh
            let tempTwoHigh = json.daily.data[2].temperatureHigh
            let tempThreeHigh = json.daily.data[3].temperatureHigh
            let tempFourHigh = json.daily.data[4].temperatureHigh
            let tempFiveHigh = json.daily.data[5].temperatureHigh
            let tempSixHigh = json.daily.data[6].temperatureHigh
            let tempSevenHigh = json.daily.data[7].temperatureHigh

            let tempTomLow = json.daily.data[1].temperatureLow
            let tempTwoLow = json.daily.data[2].temperatureLow
            let tempThreeLow = json.daily.data[3].temperatureLow
            let tempFourLow = json.daily.data[4].temperatureLow
            let tempFiveLow = json.daily.data[5].temperatureLow
            let tempSixLow = json.daily.data[6].temperatureLow
            let tempSevenLow = json.daily.data[7].temperatureLow

            let displayTomorrow = moment().add(1, 'days').format('MMM Do YY')
            let displayTwodays = moment().add(2, 'days').format('MMM Do YY')
            let displayThreedays = moment().add(3, 'days').format('MMM Do YY')
            let displayFourdays = moment().add(4, 'days').format('MMM Do YY')
            let displayFivedays = moment().add(5, 'days').format('MMM Do YY')
            let displaySixdays = moment().add(6, 'days').format('MMM Do YY')
            let displaySevendays = moment().add(7, 'days').format('MMM Do YY')

            let tomorrow = moment().add(1, 'days').format('L')
            let twodays = moment().add(2, 'days').format('L')
            let threedays = moment().add(3, 'days').format('L')
            let fourdays = moment().add(4, 'days').format('L')
            let fivedays = moment().add(5, 'days').format('L')
            let sixdays = moment().add(6, 'days').format('L')
            let sevendays = moment().add(7, 'days').format('L')

            let data = {
                dates: { tomorrow, twodays, threedays, fourdays, fivedays, sixdays, sevendays },
                displayDates: {
                    displayTomorrow, displayTwodays, displayThreedays, displayFourdays, displayFivedays,
                    displaySixdays, displaySevendays
                },
                weather: {
                    weatherTom, weatherTwo, weatherThree, weatherFour, weatherFive, weatherSix, weatherSeven
                },
                temp: {
                    tempTomHigh, tempTwoHigh, tempThreeHigh, tempFourHigh, tempFiveHigh, tempSixHigh, tempSevenHigh,
                    tempTomLow, tempTwoLow, tempThreeLow, tempFourLow, tempFiveLow, tempSixLow, tempSevenLow
                }
            }

            res.render('home', data)
        })
})


router.post('/book', (req, res) => {
    let data = req.body
    res.render('book', data)
})

router.get('/book', (req, res) => {
    res.render('book')
})


router.post('/booking', (req, res) => {
    console.log(req.body)

    let booking = req.body


    db.addBooking(booking)
        .then(data => {
            console.log(data)
        })
        .then(res.redirect('/bookings'))

})


router.get('/bookings', (req, res) => {
    db.getBookings()
        .then(data => {
            res.render('bookings', { data: data })
        })
})



module.exports = router


