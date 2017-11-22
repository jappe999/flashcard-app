const express = require('express')
const app = express()
const path = require('path')
const port = 3000

app.use('/', express.static(path.join(__dirname, '/views')))
app.set('view engine', 'pug')

app.listen(port, function () {
    console.log('Server started at ' + port)
})
