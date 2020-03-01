const port = 3003

const bodyParser = require('body-parser')
const enableCors = require('./cors')
const express = require('express')
const server = express()

server.use(bodyParser.urlencoded({ extended: true }))
server.use(bodyParser.json())
server.use(enableCors)

server.listen(port, function() {
    console.log(`Todo-app-backend is running on port ${port}`)
})

module.exports = server