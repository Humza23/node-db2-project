const router = require('express').Router()
const mid = require('./cars-middleware')
const Car = require('./cars-model')

router.get('/', async (req, res, next) => {
    try {
        const cars = await Car.getAll()
        res.json(cars)
      } catch (err) {
        next(err)
      }
})

router.get('/:id', mid.checkCarId, async (req, res, next) => {
    try {
        const cars = await Car.getById(req.params.id)
        res.json(cars)
      } catch (err) {
        next(err)
      }
})

router.post('/',
mid.checkCarPayload,
mid.checkVinNumberValid,
mid.checkVinNumberUnique, async (req, res, next) => {
    try {
        const updated = await Car.create(req.body)
        res.json(updated)
      } catch (err) {
        next(err)
      }
    });


module.exports = router