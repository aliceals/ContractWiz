
exports.up = function (knex) {
    return knex.schema.createTable('contractors', (table) => {
        table.increments('contractorId').primary()
        table.string('contractorName')
        table.string('contractorCity')
        table.string('email')
        table.integer('phoneNumber')
        table.string('password')
    })
};

exports.down = function (knex) {
    return knex.schema.dropTable('contractors')
};
