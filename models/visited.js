"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class visited extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  visited.init(
    {
      city: { type: DataTypes.STRING, unique: true },
      country: { type: DataTypes.STRING },
      long: { type: DataTypes.FLOAT, unique: true },
      lat: { type: DataTypes.FLOAT, unique: true },
    },
    {
      sequelize,
      modelName: "visited",
    }
  );
  return visited;
};
