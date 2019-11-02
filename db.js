const environment = process.env.NODE_ENV || 'development'
const config = require('./knexfile')[environment]
const database = require('knex')(config)

module.exports = {
    addBooking,
    getBookings,
    displayWeatherSign,
}



function addBooking(booking, db = database) {
    return db('bookings')
        .join('services', 'job_id', 'servicesId')
        .insert(booking)
        .select()

}

function getBookings(db = database) {
    return db('bookings')
        .join('services', 'job_id', 'servicesId')
        .select()
}

function displayWeatherSign(weather) {
    console.log(weather)
    if (weather == 'cloudy') {
        return "../public/images/cloudy.png"
    } else if (weather == 'rain') {
        return "../public/images/rainy.png"
    } else if (weather == 'clear-day') {
        return "../public/images/clear-day.png"
    } else if (weather == 'snow') {
        return "../public/images/snow.png"
    } else if (weather == 'sleet') {
        return "../public/images/sleet.png"
    } else if (weather == 'wind') {
        return "../public/images/windy.png"
    } else if (weather == "fog") {
        return "../public/images/fog.png"
    } else if (weather == "partly-cloudy-day") {
        return "../public/images/partly-cloudy.png"
    } else if (weather == "hail") {
        return "../public/images/hail.png"
    } else if (weather == "thunderstorm") {
        return "../public/images/thunderstorm.png"
    }
    else return "../public/images/default.png"
}
