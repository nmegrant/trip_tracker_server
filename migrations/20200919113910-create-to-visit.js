"use strict";
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("toVisits", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      city: {
        type: Sequelize.STRING,
        unique: true,
      },
      country: {
        type: Sequelize.STRING,
      },
      long: {
        type: Sequelize.FLOAT,
        unique: true,
      },
      lat: {
        type: Sequelize.FLOAT,
        unique: true,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("toVisits");
  },
};
