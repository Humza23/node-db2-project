const vinValidator = require('vin-validator');

const checkCarId = (req, res, next) => {
  if (req.params.id === undefined) {
    res.status(404).json({
      message: `car with id ${req.params.id} is not found`
    })
  } 
    next()
}

const checkCarPayload = (req, res, next) => {
  if (!req.params.id) {
  res.status(404).json({
    message: `${req.params.id} is missing`
    })
  } else if (!req.body.vin) {
    res.status(404).json({
      message: `${req.body.vin} is missing`
      })
  } else if (!req.body.make) {
    res.status(404).json({
      message: `${req.body.make} is missing`
      })
  } else if (!req.body.model) {
    res.status(404).json({
      message: `${req.body.model} is missing`
      })
  } else if (!req.body.mileage) {
    res.status(404).json({
      message: `${req.body.mileage} is missing`
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
  // if (!vinValidator.validate(req.body.vin)) {
  //   res.status(400).json({ message: `vin ${req.body.vin} is invalid` })
  // }
  // next()
}

module.exports = {
  checkCarId,
  checkCarPayload,
  checkVinNumberValid,
  checkVinNumberUnique,
}