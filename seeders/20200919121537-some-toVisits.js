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
          long: 12.5683,
          lat: 55.6761,
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
