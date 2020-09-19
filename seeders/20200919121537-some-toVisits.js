"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "toVisits",
      [
        {
          city: "Rome",
          country: "Italy",
          long: 12.4964,
          lat: 41.9028,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          city: "Athens",
          country: "Greece",
          long: 12.4964,
          lat: 41.9028,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          city: "Copenhagen",
          country: "Denmark",
          long: 23.7275,
          lat: 37.9838,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("toVisits", null, {});
  },
};
