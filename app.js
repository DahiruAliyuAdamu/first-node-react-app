const { render } = require('ejs')
const express = require('express')
const morgan =  require('morgan')
const mongoose = require('mongoose')
const dotenv = require('dotenv')
const blogRoutes = require('./routes/blogRoutes')

// const { default: mongoose } = require('mongoose')

const app = express()

dotenv.config()

const PORT = process.env.PORT || 70000
const MONGOURL = process.env.MONGO_URL

// const dbURI = 'mongodb+srv://dbDahasma:Daha3242@@dahasma.3sorqev.mongodb.net/?retryWrites=true&w=majority&appName=dahasma'
mongoose.connect(MONGOURL).then(() =>
    app.listen(3000)
).catch(err => 
    console.log(err)
)

app.set('view engine', 'ejs')
// app.set('views', 'templates')

app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }))
app.use(morgan('dev'))

app.get('/', (req, res) => {
    res.redirect('/blogs')
})

app.get('/about', (req, res) => {
    res.render('about', { title: 'about' })
})

// blog routes
app.use('/blogs', blogRoutes)

app.use((req, res) => {
    res.status(404).render('404', { title: '404' })
})