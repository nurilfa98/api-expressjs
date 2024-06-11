require('dotenv').config()

const express = require('express')
const userRoutes = require('./routes/users')
const middlewareRequest = require('./middleware/logs')
const PORT = process.env.PORT || 5000
const upload = require('./middleware/multer')


const app = express()

app.use(middlewareRequest)
app.use(express.json())
app.use('/assets', express.static('public'))

// base url akan akses kesini
app.get('/', (req, res) => {
    res.send("Hello brother!")
})

app.use('/users', userRoutes)

app.post('/upload', upload.single('photo'), (req, res) => {
    res.json({
        message: 'Upload berhasil'
    })
})

app.use((err, req, res, next) => {
    res.json({
        message: err.message
    })
})

app.listen(PORT, () => {
    console.log(`We are running in port ${PORT}`)
})
