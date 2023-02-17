const express = require('express')
const cookieSession = require('cookie-session')
const bodyParser = require('body-parser')
const path = require('path')

const port = 3000
const app = express()

app.set('view engine', 'ejs')
app.set('views', 'views')

const shopRoutes = require('./routes/shop')
const authRoutes = require('./routes/auth')

const oneDay = 1000 * 60 * 60 * 24
app.use(cookieSession({
    name: 'session',                              // name of the cookie
    secret: 'MAKE_THIS_SECRET_SECURE',            // key to encode session
    maxAge: oneDay,                  // cookie's lifespan                               // cookie is not available to JavaScript (client)
  }))

app.use(bodyParser.urlencoded({ extended: false }))

const myusername = 'user'
const mypassword = 'password'

app.use(shopRoutes)
app.use(authRoutes)
 

app.listen(port, () => console.log(`App listening at http://localhost:${port}`))
