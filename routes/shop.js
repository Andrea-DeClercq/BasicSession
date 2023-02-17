const path = require('path')
const express = require('express')
const router = express.Router()
const CryptoJs = require('crypto-js');


router.get('/', (req,res) => {
    console.log('Session index: ' + req.session.isLoggedIn);
    res.render('index', {
        pageTitle: 'Home',
        isAuthenticated: req.session.isLoggedIn
    })
})

router.get('/token', (req,res) => {
    console.log('Session index: ' + req.session.isLoggedIn);
    const token = CryptoJs.AES.encrypt('my message', 'secret key 123').toString()
    req.session.csrf = token
    console.log(req.session.csrf)
    res.render('token', {
        pageTitle: 'Token',
        token: token,
        isAuthenticated: req.session.isLoggedIn
    })
})

router.post('/token', (req,res) => {
    const form_csrf = req.body._csrf
    if (req.session.csrf === form_csrf)
        console.log('csrf ok')
    else 
        console.log('crsf no')
    // console.log('crsf = '+ csrf);
    res.redirect('/token')
})

module.exports = router