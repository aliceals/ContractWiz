
exports.up = function (knex) {
    return knex.schema.createTable('bookings', (table) => {
        table.increments('bookingId').primary()
        table.integer('user_id')
        table.integer('job_id')
        table.date('bookingDate')
        table.time('bookingTime')
    })
};

exports.down = function (knex) {
    return knex.schema.dropTable('bookings')
};
