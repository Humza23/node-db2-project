const express = require("express")

const server = express()

const carsRouter = require('./cars/cars-router')

server.use(express.json())
// DO YOUR MAGIC

server.use('/api/cars', carsRouter)



server.use('*', (req, res) => {
    res.status(404).json({
        message: 'not found'
    })
})

server.use((err, req, res, next) => { // eslint-disable-line
    res.status(err.status || 500).json({
      custom: 'something exploded inside the app',
      message: err.message,
      stack: err.stack,
    })
  });


module.exports = server