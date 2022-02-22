'use strict'
import express from 'express'
import expressLayouts from 'express-ejs-layouts'
import dotenv from'dotenv'
const app = express()
dotenv.config()

app.set('view engine', 'ejs')
app.use(expressLayouts)


app.get('/', (req,res) =>{
    res.render('welcome.ejs')
})


app.listen(5000, () => console.log(`app listening on port 5000! `))