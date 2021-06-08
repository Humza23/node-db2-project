const Car = require('./cars-model')
const vinValidator = require('vin-validator');

const checkCarId =  async (req, res, next) => {
  const carId = await Car.getById(req.params.id)
  if (!carId) {
    res.status(404).json({
      message: `car with id ${req.params.id} is not found`
    })
  } 
    next()
}

const checkCarPayload = (req, res, next) => {
  if (!req.body.vin) {
    res.status(400).json({
      message: `vin is missing`
      })
  } else if (!req.body.make) {
    res.status(400).json({
      message: `make is missing`
      })
  } else if (!req.body.model) {
    res.status(400).json({
      message: `model is missing`
      })
  } else if (!req.body.mileage) {
    res.status(400).json({
      message: `mileage is missing`
      })
  }
  next()
}

const checkVinNumberValid = (req, res, next) => {
  if (!vinValidator.validate(req.body.vin)) {
    res.status(400).json({ message: `vin ${req.body.vin} is invalid` })
  }
  next()
}

const checkVinNumberUnique = (req, res, next) => {
  if (req.body.vin !== undefined) {
    res.status(400).json({ message: `vin ${req.body.vin} already exists` })
  }
  next()
}

module.exports = {
  checkCarId,
  checkCarPayload,
  checkVinNumberValid,
  checkVinNumberUnique,
}