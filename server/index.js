const express = require('express')
const passport = require('passport')
const GoogleStrategy = require('passport-google-oauth20').strategy


const app = express()

passport.use(mew GoogleStrategy())

app.get('/', (req,res)=>{
    res.json({
        hi: "hahaha"
    })
})

app.listen('5000')

// http://localhost:5000/auth/google/callback

