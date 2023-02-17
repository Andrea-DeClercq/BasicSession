const path = require('path')
const express = require('express')
const router = express.Router()

router.get('/', (req,res) => {
    console.log('Session index: ' + req.session.isLoggedIn);
    res.render('index', {
        pageTitle: 'Home',
        isAuthenticated: req.session.isLoggedIn
    })
})

router.get('/token', (req,res) => {
    console.log('Session index: ' + req.session.isLoggedIn);
    res.render('token', {
        pageTitle: 'Token',
        isAuthenticated: req.session.isLoggedIn
    })
})

router.post('/token', (req,res) => {
    const csrf = req.body._csrf
    console.log(csrf);
    res.render('token', {
        pageTitle: 'Token',
        isAuthenticated: req.session.isLoggedIn
    })
})

module.exports = router