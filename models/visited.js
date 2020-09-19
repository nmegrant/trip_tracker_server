'use strict';
const {
  Model
} = require('sequelize');
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
  };
  visited.init({
    city: DataTypes.STRING,
    country: DataTypes.STRING,
    long: DataTypes.FLOAT,
    lat: DataTypes.FLOAT
  }, {
    sequelize,
    modelName: 'visited',
  });
  return visited;
};