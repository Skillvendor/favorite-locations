'use strict';
module.exports = (sequelize, DataTypes) => {
  const Spot = sequelize.define('Spot', {
    name: DataTypes.STRING,
    wind: DataTypes.FLOAT,
    country_id: DataTypes.INTEGER
  }, {});
  Spot.associate = function(models) {
    // associations can be defined here
    Spot.belongsTo(models.Country);
    Spot.hasMany(models.Favorite)
  };
  return Spot;
};
