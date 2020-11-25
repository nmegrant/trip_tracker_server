"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "userToVisits",
      [
        {
          userId: 1,
          city: "Rome",
          country: "Italy",
          long: 12.4964,
          lat: 41.9028,
          date: new Date("2021-06-01"),
          days: 5,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 2,
          city: "Athens",
          country: "Greece",
          long: 23.7275,
          lat: 37.9838,
          date: new Date("2021-05-06"),
          days: 4,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 3,
          city: "Lisbon",
          country: "Portugal",
          long: -9.1393,
          lat: 38.7223,
          date: new Date("2021-07-15"),
          days: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 3,
          city: "Madrid",
          country: "Spain",
          long: -3.7038,
          lat: 40.4168,
          date: new Date("2021-10-15"),
          days: 5,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("userToVisits", null, {});
  },
};
