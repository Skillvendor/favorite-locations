const models = require('../models/index')
const Countries = models.Countries

exports.index = async (req, res, next) => {
  const countries = await Countries.findAll()

  res.status(200).json(countries)
}
