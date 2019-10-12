'use strict';
module.exports = (sequelize, DataTypes) => {
  const Favorite = sequelize.define('Favorite', {
    spotId: DataTypes.INTEGER,
    userId: DataTypes.INTEGER
  }, {});
  Favorite.associate = function(models) {
    // associations can be defined here
    Favorite.belongsTo(models.Spot);
    Favorite.belongsTo(models.User);
  };
  return Favorite;
};
