exports.seed = knex =>
    knex('users').del()
        .then(() => knex('users').insert([
            { userId: 0001, userName: "Alice Alsford", userAddress: "76 Samwell Drive, Whitby", userCity: "Porirua" },
            { userId: 0002, userName: "Phil Alsford", userAddress: "76 Samwell Drive, Whitby", userCity: "Wellington" },
            { userId: 0003, userName: "Hugo Alsford", userAddress: "76 Samwell Drive, Whitby", userCity: "Hamilton" },
            { userId: 0004, userName: "Freya Alsford", userAddress: "76 Samwell Drive, Whitby", userCity: "Auckland" },
            { userId: 0005, userName: "Stacey Groen", userAddress: "7 Lambert Way", userCity: "Paraparaumu" },
            { userId: 0006, userName: "Lucy Tauai", userAddress: "144 Card Road, Tauhei", userCity: "Morrinsville" },
        ]))