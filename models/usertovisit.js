"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class userToVisit extends Model {
    static associate(models) {
      userToVisit.belongsTo(models.users);
    }
  }
  userToVisit.init(
    {
      country: DataTypes.STRING,
      city: DataTypes.STRING,
      long: DataTypes.FLOAT,
      lat: DataTypes.FLOAT,
      date: DataTypes.DATE,
      days: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "userToVisit",
    }
  );
  return userToVisit;
};
