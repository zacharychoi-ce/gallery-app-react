const path = require('path')
const express = require('express')
const cors = require('cors')
const server = express()

const postRoutes = require('./routes/posts')

server.use(express.json())
server.use(express.static(path.join(__dirname, './public')))
server.use(cors('*'))

server.use('/api/v1/posts', postRoutes)

server.get('*', (req, res) => {
  const appPath = path.join(__dirname, 'public', 'index.html')
  res.sendFile(appPath)
})

module.exports = server
