const express = require('express')
const app = express()

app.get('/', (req,res)=>{
    res.json({
        hi: "hahaha"
    })
})

app.listen('5000')