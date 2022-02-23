'use strict'
import express from 'express'
import expressLayouts from 'express-ejs-layouts'
import dotenv from 'dotenv'
import path from 'path'
const app = express()
dotenv.config()

app.set('view engine', 'ejs')
app.use(expressLayouts)


app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname + '/views/index.html'));
})



app.listen(5000, () => console.log(`app listening on port 5000! `))