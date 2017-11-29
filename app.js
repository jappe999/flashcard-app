const express = require('express')
const app     = express()
const port    = 3000
const path    = require('path')
const routes  = require('./routes')(app)

app.use('/', express.static(path.join(__dirname, '/')))

app.set('view engine', 'pug')

app.listen(port, function () {
    console.log('Server started at ' + port)
})
