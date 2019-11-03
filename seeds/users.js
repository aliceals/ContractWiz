exports.seed = knex =>
    knex('users').del()
        .then(() => knex('users').insert([
            { userId: 0001, userName: "Alice Alsford", userAddress: "76 Samwell Drive, Whitby", userCity: "Porirua", email: "alice.alsford@gmail.com", phoneNumber: "022222222", password: "pickle" },
            { userId: 0002, userName: "Phil Alsford", userAddress: "76 Samwell Drive, Whitby", userCity: "Wellington", email: "phil.alsford@gmail.com", phoneNumber: "022422222", password: "pickle" },
            { userId: 0003, userName: "Hugo Alsford", userAddress: "76 Samwell Drive, Whitby", userCity: "Hamilton", email: "hugo.alsford@gmail.com", phoneNumber: "022224222", password: "pickle" },
            { userId: 0004, userName: "Freya Alsford", userAddress: "76 Samwell Drive, Whitby", userCity: "Auckland", email: "freya.alsford@gmail.com", phoneNumber: "022222222", password: "pickle" },
            { userId: 0005, userName: "Stacey Groen", userAddress: "7 Lambert Way", userCity: "Paraparaumu", email: "alice.alsford@gmail.com", phoneNumber: "022232222", password: "pickle" },
            { userId: 0006, userName: "Lucy Tauai", userAddress: "144 Card Road, Tauhei", userCity: "Morrinsville", email: "alice.alsford@gmail.com", phoneNumber: "022322222", password: "pickle" },
        ]))