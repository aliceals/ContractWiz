exports.seed = knex =>
    knex('users').del()
        .then(() => knex('users').insert([
            { servicesId: 1111, servicesDescription: "Lawn mowing", servicesFee: 40 },
            { servicesId: 1112, servicesDescription: "Weeding", servicesFee: 20 },
            { servicesId: 1113, servicesDescription: "Lawn mowing & weeding", servicesFee: 55 },
            { servicesId: 1114, servicesDescription: "Planting", servicesFee: 50 },
            { servicesId: 1115, servicesDescription: "Retaining wall", servicesFee: 140 },
        ]))