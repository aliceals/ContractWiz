
exports.up = function (knex) {
    return knex.schema.createTable('users', (table) => {
        table.increments('userId').primary()
        table.string('userName')
        table.string('userAddress')
        table.string('userCity')
        table.string('email')
        table.integer('phoneNumber')
        table.string('password')
    })
};

exports.down = function (knex) {
    return knex.schema.dropTable('users')
};
