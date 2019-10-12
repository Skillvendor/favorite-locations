const models = require('../models/index')
const Favorite = models.Favorite

exports.create = async (req, res, next) => {
  const userId = req.userId
  const {
    spot_id,
  } = req.body

  const favorite = await Favorite.create({ user_id: userId, spot_id: spot_id })

  res.status(200).json(favorite)
}

exports.delete = async (req, res, next) => {
  const {
    id,
  } = req.params

  const deletedFavorite = Favorite.destroy({
    where: {
      id: id,
    }
  })

  res.status(204).json(deletedFavorite)
}
