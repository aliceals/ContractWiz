
exports.up = function (knex) {
    return knex.schema.createTable('services', (table) => {
        table.increments('servicesId').primary()
        table.string('servicesDescription')
        table.string('servicesFee')
    })
};

exports.down = function (knex) {
    return knex.schema.dropTable('services')
};
