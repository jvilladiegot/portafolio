'use strict'
const express = require('express') 
const expressLayouts = require('express-ejs-layouts') 
const dotenv = require('dotenv') 
const path = require('path') 
const app = express()
dotenv.config()

app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')
app.use(expressLayouts)

app.get('/', (req, res) => {
    res.render('index.ejs')
})



app.listen(5000, () => console.log(`app listening on port 5000! `))