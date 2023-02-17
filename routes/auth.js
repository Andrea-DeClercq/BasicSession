const path = require('path')
const express = require('express')
const router = express.Router()

router.get('/login', (req, res, next) => {
    console.log('Session: ' + req.session.isLoggedIn);
    res.render('login', {
        pageTitle: 'Login',
        isAuthenticated: false
    })
})

router.post('/login', (req, res, next) => {
    req.session.isLoggedIn = true;
    console.log('Session: ' + req.session.isLoggedIn);
    res.redirect('/');
})

router.get('/logout',(req,res) => {
    req.session = null
    res.redirect('/')
})

router.get('/register', (req, res, next) => {
    // console.log('Session: ' + req.session.isLoggedIn);
    res.render('register', {
        pageTitle: 'Login',
        isAuthenticated: false
    })
})

router.post('/register', (req, res, next) => {
    req.session.isLoggedIn = true;
    console.log('Session: ' + req.session.isLoggedIn);
    res.redirect('/');
})

module.exports = router