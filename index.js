'use strict'
import express from 'express'
import { engine } from 'express-handlebars'
import { fileURLToPath } from 'url'
import { dirname } from 'path'
import axios from 'axios'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

const app = express();

app.engine('handlebars', engine());
app.set('view engine', 'handlebars')
app.set('views', __dirname + '/views')

app.get('/', async (req, res) => {
    const profile = {
        email: "ingsistemajvilladiegot@gmail.com",
        linkedin: 'jeaffer-villadiego-turizo',
        github: 'ing27villadiego'
    }
    res.render('home', { profile })
});

app.listen(5000)

console.log('Runnig as port 5000')