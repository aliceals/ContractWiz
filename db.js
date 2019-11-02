const environment = process.env.NODE_ENV || 'development'
const config = require('./knexfile')[environment]
const database = require('knex')(config)

module.exports = {
    // addBooking,
    getBookings
}



// function addBooking(booking, db = database) {
//     return db('bookings')
//         .join('services', 'job_id', 'servicesId')

// }

function getBookings(db = database) {
    return db('bookings')
        .join('services', 'job_id', 'servicesId')
        .select()
}

