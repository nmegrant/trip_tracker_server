"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn(
      "userVisiteds",
      "ranking",
      {
        type: Sequelize.FLOAT,
      },
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn("userVisiteds", "ranking");
  },
};
