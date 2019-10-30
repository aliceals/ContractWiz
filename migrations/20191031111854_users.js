
exports.up = function (knex) {
    return knex.schema.createTable('users', (table) => {
        table.increments('user_id').primary()
        table.string('user_name')
        table.string('user_address')
        table.string('user_city')
    })
};

exports.down = function (knex) {
    return knex.schema.dropTable('users')
};
