"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn(
      "userToVisits",
      "long",
      {
        type: Sequelize.INTEGER,
      },
      {}
    );
    await queryInterface.addColumn(
      "userToVisits",
      "lat",
      {
        type: Sequelize.INTEGER,
      },
      {}
    );
    await queryInterface.addColumn(
      "userVisiteds",
      "long",
      {
        type: Sequelize.INTEGER,
      },
      {}
    );
    await queryInterface.addColumn(
      "userVisiteds",
      "lat",
      {
        type: Sequelize.INTEGER,
      },
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn("userToVisits", "long");
    await queryInterface.removeColumn("userToVisits", "lat");
    await queryInterface.removeColumn("userVisiteds", "long");
    await queryInterface.removeColumn("userVisiteds", "lat");
  },
};
