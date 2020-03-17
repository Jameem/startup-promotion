const express = require('express')
const passport = require('passport')
const GoogleStrategy = require('passport-google-oauth20').strategy
const keys = require('./config/keys')

const app = express()

passport.use(new GoogleStrategy({
    clientID: keys.googleClientId,
    clientSecret: keys.googleClientSecret,
    callbackURL: 'auth/google/callback'
}, (accessToken) => {
    console.log(accessToken)
}))

app.get('/', (req, res) => {
    res.json({
        hi: "hahaha"
    })
})

app.listen('5000')

// http://localhost:5000/auth/google/callback