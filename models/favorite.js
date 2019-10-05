'use strict';
module.exports = (sequelize, DataTypes) => {
  const Favorite = sequelize.define('Favorite', {
    spot_id: DataTypes.INTEGER,
    user_id: DataTypes.INTEGER
  }, {});
  Favorite.associate = function(models) {
    // associations can be defined here
    Favorite.belongsTo(models.Spot);
    Favorite.belongsTo(models.User);
  };
  return Favorite;
};
