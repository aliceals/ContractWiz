const express = require('express')
// const db = require('../db')
const router = express.Router()
const hbs = require('express-handlebars')

router.get('/', (req, res) => {
    res.redirect('/home')
})

router.get('/home', (req, res) => {
    res.render('home')
})

module.exports = router