"use strict";
const bcrypt = require("bcrypt");
const SALT_ROUNDS = 10;

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return await queryInterface.bulkInsert(
      "users",
      [
        {
          firstName: "Harry",
          lastName: "Potter",
          email: "test@test.com",
          password: bcrypt.hashSync("test1234", SALT_ROUNDS),
          country: "United Kingdoms",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          firstName: "Hermione",
          lastName: "Granger",
          email: "test1@test.com",
          password: bcrypt.hashSync("test1234", SALT_ROUNDS),
          country: "Belize",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          firstName: "Ron",
          lastName: "Weasley",
          email: "test2@test.com",
          password: bcrypt.hashSync("test1234", SALT_ROUNDS),
          country: "Japan",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("users", null, {});
  },
};
