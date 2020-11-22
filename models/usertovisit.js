"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class userToVisit extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      userToVisit.belongsTo(models.users);
    }
  }
  userToVisit.init(
    {
      country: DataTypes.STRING,
      city: DataTypes.STRING,
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
