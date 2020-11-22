"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "userVisiteds",
      [
        {
          userId: 2,
          city: "New York",
          country: "United States",
          date: new Date("2019-07-12"),
          days: 5,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 1,
          city: "London",
          country: "England",
          date: new Date("2019-09-01"),
          days: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 2,
          city: "Edinburgh",
          country: "Scotland",
          date: new Date("2018-12-02"),
          days: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 3,
          city: "Amsterdam",
          country: "The Netherlands",
          date: new Date("2020-01-01"),
          days: 4,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("userVisiteds", null, {});
  },
};
