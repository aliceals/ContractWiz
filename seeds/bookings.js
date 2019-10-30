exports.seed = knex =>
    knex('users').del()
        .then(() => knex('users').insert([
            { bookingId: 2221, user_id: 0001, services_id: 1111, bookingDate: "11/11/2019", bookingTime: "09:00" },
            { bookingId: 2222, user_id: 0003, services_id: 1113, bookingDate: "14/11/2019", bookingTime: "11:00" },
            { bookingId: 2223, user_id: 0004, services_id: 1112, bookingDate: "15/11/2019", bookingTime: "15:00" },
            { bookingId: 2224, user_id: 0002, services_id: 1114, bookingDate: "12/11/2019", bookingTime: "08:00" },
            { bookingId: 2225, user_id: 0001, services_id: 1112, bookingDate: "16/11/2019", bookingTime: "09:30" },

        ]))