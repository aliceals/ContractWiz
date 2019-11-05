const environment = process.env.NODE_ENV || 'development'
const config = require('./knexfile')[environment]
const database = require('knex')(config)

module.exports = {
    addBooking,
    getBookings,
    displayWeatherSign,
    deleteBooking,
    getServiceFee,
    createUser,
    getUser,
    getPassword,
    getUsersCity,
    getFullUser

}



function addBooking(userId, booking, db = database) {
    return db('bookings')
        .where('user_id', userId)
        .insert(booking)
        .select()

}

function getBookings(username, db = database) {
    return db('bookings')
        .join('services', 'job_id', 'servicesId')
        .join('users', 'user_id', 'userId')
        .where('userName', username)
        .select()
}

function displayWeatherSign(weather) {
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


function deleteBooking(bookingId, db = database) {
    return db('bookings').where('bookingId', bookingId).delete()
}

function getServiceFee(db = database) {
    return db('services').select('servicesFee')
}

function createUser(user, db = database) {
    return db('users').insert(user).select()
}

function getUser(username, db = database) {
    return db('users').where('userName', username).select('userName').first()
}

function getPassword(username, password, db = database) {
    return db('users').where('userName', username).where('password', password).select('password').first()
}

function getUsersCity(username, db = database) {
    return db('users').where('userName', username).select('userCity').first()

}

function getFullUser(username, db = database) {
    return db('users').where('userName', username).select().first()
}