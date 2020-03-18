const express = require('express')
const passport = require('passport')
const GoogleStrategy = require('passport-google-oauth20').Strategy
const keys = require('./config/keys')

const app = express()

passport.use(new GoogleStrategy({
    clientID: keys.googleClientId,
    clientSecret: keys.googleClientSecret,
    callbackURL: '/auth/google/callback'
}, (accessToken) => {
    console.log(accessToken)
}))

app.get('/auth/google', 
    passport.authenticate('google', {
        scope:['profile', 'email']
    })
)

app.get('/', (req, res) => {
    res.json({
        hi: "hahaha"
    })
})
const PORT = process.env.PORT || 5000
app.listen(PORT)
console.log("Running on port", PORT)

// http://localhost:5000/auth/google/callback