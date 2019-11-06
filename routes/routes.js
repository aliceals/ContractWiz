const express = require('express')
const db = require('../db')
const router = express.Router()
const fetch = require('node-fetch')
const moment = require('moment')
const sessionUtil = require('../sessionutils')
const bcrypt = require('bcrypt')


moment.locale('en-nz')


router.get('/home', sessionUtil.sessionChecker, (req, res) => {

    db.getUsersCity(req.session.username)
        .then(data => {
            let city = data.userCity

            req.session.city = city

            fetch(`https://api.darksky.net/forecast/6fe0e60f51867939f3313dd1351dcd17/-41.131489,174.839996?units=si`)
                .then((res) => res.json())
                .then(json => {

                    let weatherTom = json.daily.data[1].icon
                    let weatherTwo = json.daily.data[2].icon
                    let weatherThree = json.daily.data[3].icon
                    let weatherFour = json.daily.data[4].icon
                    let weatherFive = json.daily.data[5].icon
                    let weatherSix = json.daily.data[6].icon
                    let weatherSeven = json.daily.data[7].icon


                    let imageTom = db.displayWeatherSign(weatherTom)
                    let imageTwo = db.displayWeatherSign(weatherTwo)
                    let imageThree = db.displayWeatherSign(weatherThree)
                    let imageFour = db.displayWeatherSign(weatherFour)
                    let imageFive = db.displayWeatherSign(weatherFive)
                    let imageSix = db.displayWeatherSign(weatherSix)
                    let imageSeven = db.displayWeatherSign(weatherSeven)



                    let tempTomHigh = Math.round(json.daily.data[1].temperatureHigh)
                    let tempTwoHigh = Math.round(json.daily.data[2].temperatureHigh)
                    let tempThreeHigh = Math.round(json.daily.data[3].temperatureHigh)
                    let tempFourHigh = Math.round(json.daily.data[4].temperatureHigh)
                    let tempFiveHigh = Math.round(json.daily.data[5].temperatureHigh)
                    let tempSixHigh = Math.round(json.daily.data[6].temperatureHigh)
                    let tempSevenHigh = Math.round(json.daily.data[7].temperatureHigh)

                    let tempTomLow = Math.round(json.daily.data[1].temperatureLow)
                    let tempTwoLow = Math.round(json.daily.data[2].temperatureLow)
                    let tempThreeLow = Math.round(json.daily.data[3].temperatureLow)
                    let tempFourLow = Math.round(json.daily.data[4].temperatureLow)
                    let tempFiveLow = Math.round(json.daily.data[5].temperatureLow)
                    let tempSixLow = Math.round(json.daily.data[6].temperatureLow)
                    let tempSevenLow = Math.round(json.daily.data[7].temperatureLow)

                    let displayTomorrow = moment().add(1, 'days').format('dddd MMM Do YYYY')
                    let displayTwodays = moment().add(2, 'days').format('dddd MMM Do YYYY')
                    let displayThreedays = moment().add(3, 'days').format('dddd MMM Do YYYY')
                    let displayFourdays = moment().add(4, 'days').format('dddd MMM Do YYYY')
                    let displayFivedays = moment().add(5, 'days').format('dddd MMM Do YYYY')
                    let displaySixdays = moment().add(6, 'days').format('dddd MMM Do YYYY')
                    let displaySevendays = moment().add(7, 'days').format('dddd MMM Do YYYY')

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
                            imageTom, imageTwo, imageThree, imageFour, imageFive, imageSix, imageSeven
                        },
                        temp: {
                            tempTomHigh, tempTwoHigh, tempThreeHigh, tempFourHigh, tempFiveHigh, tempSixHigh, tempSevenHigh,
                            tempTomLow, tempTwoLow, tempThreeLow, tempFourLow, tempFiveLow, tempSixLow, tempSevenLow
                        },
                        userName: req.session.username,
                        city: req.session.city
                    }

                    res.render('home', data)
                })
        })
})

router.post('/book', (req, res) => {
    let data = req.body
    db.getServiceFee()
        .then(services => {
            let dayAndJob = {
                day: data.day,
                service1: services[0].servicesFee,
                service2: services[1].servicesFee,
                service3: services[2].servicesFee,
                service4: services[3].servicesFee,
                service5: services[4].servicesFee,
            }
            res.render('book', dayAndJob)
        })
})

router.get('/book', sessionUtil.sessionChecker, (req, res) => {

    res.render('book')
})


router.post('/booking', sessionUtil.sessionChecker, (req, res) => {
    let username = req.session.username

    let booking = req.body


    db.getFullUser(username)
        .then(data => {
            let userId = data.userId
            booking.user_id = userId
            db.addBooking(userId, booking)
                .then(res.redirect('/bookings'))
        })


})

router.get('/bookings', sessionUtil.sessionChecker, (req, res) => {
    db.getBookings(req.session.username)
        .then(data => {
            res.render('bookings', { data: data })
        })
})

router.post('/delete', sessionUtil.sessionChecker, (req, res) => {
    let bookingId = req.body
    db.deleteBooking(bookingId.bookingId)
        .then(() => {
            res.redirect('/bookings')
        })
})






module.exports = router


