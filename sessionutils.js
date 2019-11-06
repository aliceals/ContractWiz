//middleware function to check for logged-in users


const sessionChecker = (req, res, next) => {
    if (req.session.username && req.cookies.user_sid) {
        next()
    } else {
        res.redirect('/login')
    }
}


// fetch(`https://api.opencagedata.com/geocode/v1/json?q=porirua%2C%20new%20zealand&key=e49c348785874a5c9d9699b08b00239f&language=en&pretty=1`,
//     {
//         method: "POST",
//         headers: {
//             "Content-Type": "application/x-www-form-urlencoded"
//         }
//     }


module.exports = {
    sessionChecker,

}