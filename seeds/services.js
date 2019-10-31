exports.seed = knex =>
    knex('services').del()
        .then(() => knex('services').insert([
            { servicesId: 1111, servicesDescription: "Lawn mowing", servicesFee: 40 },
            { servicesId: 1112, servicesDescription: "Weeding", servicesFee: 20 },
            { servicesId: 1113, servicesDescription: "Lawn mowing & weeding", servicesFee: 55 },
            { servicesId: 1114, servicesDescription: "Planting", servicesFee: 50 },
            { servicesId: 1115, servicesDescription: "Retaining wall", servicesFee: 140 },
        ]))