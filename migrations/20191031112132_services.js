
exports.up = function (knex) {
    return knex.schema.createTable('services', (table) => {
        table.increments('services_id').primary()
        table.string('services_description')
        table.string('services_fee')
    })
};

exports.down = function (knex) {
    return knex.schema.dropTable('services')
};
