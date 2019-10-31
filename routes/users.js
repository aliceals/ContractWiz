const express = require('express')
const db = require('../db')
const router = express.Router()

router.get('/', (req, res) => {
    res.redirect('/home')
})

module.exports = router