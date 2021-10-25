const path = require('path')
const express = require('express')
const cors = require('cors')
const server = express()

const postsRoutes = require('./routes/posts')

server.use(express.json())
server.use(express.static(path.join(__dirname, './public')))
server.use(cors('*'))

server.use('/api/v1/', postsRoutes)

server.get('*', (req, res) => {
  const appPath = path.join(__dirname, 'public', 'index.html')
  res.sendFile(appPath)
})

module.exports = server
