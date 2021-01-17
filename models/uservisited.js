"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class userVisited extends Model {
    static associate(models) {
      userVisited.belongsTo(models.users);
    }
  }
  userVisited.init(
    {
      country: DataTypes.STRING,
      city: DataTypes.STRING,
      long: DataTypes.FLOAT,
      lat: DataTypes.FLOAT,
      date: DataTypes.DATE,
      days: DataTypes.INTEGER,
      ranking: { type: DataTypes.FLOAT, defaultValue: -1 },
    },
    {
      sequelize,
      modelName: "userVisited",
    }
  );
  return userVisited;
};
