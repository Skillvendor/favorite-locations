const models = require('../models/index')
const Spot = models.Spot

exports.index = async (req, res, next) => {
  const spots = await Spot.findAll()

  res.status(200).json(spots)
}

exports.show = async (req, res, next) => {
  const spotId = req.params.id

  const spot = await Spot.findByPk(spotId)

  res.status(200).json(spot)
}
