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
          date: new Date("2021-06-01"),
          days: 5,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 2,
          city: "Athens",
          country: "Greece",
          date: new Date("2021-05-06"),
          days: 4,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 3,
          city: "Lisbon",
          country: "Portugal",
          date: new Date("2021-07-15"),
          days: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 3,
          city: "Madrid",
          country: "Spain",
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
