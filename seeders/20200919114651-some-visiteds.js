"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "visiteds",
      [
        {
          city: "Wellington",
          country: "New Zealand",
          long: 174.77623,
          lat: -41.286461,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          city: "Sydney",
          country: "Australia",
          long: 151.20929,
          lat: -33.86882,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          city: "Apia",
          country: "Samoa",
          long: -171.760056,
          lat: -13.83282,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          city: "Nadi",
          country: "Fiji",
          long: 177.435623,
          lat: -17.776537,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          city: "Nuku'alofa",
          country: "Tonga",
          long: -175.216431,
          lat: -21.136009,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          city: "Singapore",
          country: "Singapore",
          long: 103.8198,
          lat: 1.3521,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          city: "Tokyo",
          country: "Japan",
          long: 139.6503,
          lat: 35.6762,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          city: "Madrid",
          country: "Spain",
          long: -3.7038,
          lat: 40.4168,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          city: "Lisbon",
          country: "Portugal",
          long: -9.1393,
          lat: 38.7223,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          city: "Paris",
          country: "France",
          long: 2.3522,
          lat: 48.8566,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          city: "Brussels",
          country: "Belgium",
          long: 4.3517,
          lat: 50.8503,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          city: "Amsterdam",
          country: "The Netherlands",
          long: 4.9041,
          lat: 52.3676,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          city: "Berlin",
          country: "Germany",
          long: 13.405,
          lat: 52.52,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          city: "London",
          country: "England",
          long: -0.1278,
          lat: 51.5074,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          city: "Innsbruck",
          country: "Austria",
          long: 11.4041,
          lat: 47.2692,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          city: "Lucerne",
          country: "Switzerland",
          long: 8.3093,
          lat: 47.0502,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          city: "Tromso",
          country: "Norway",
          long: 18.9553,
          lat: 69.6492,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          city: "Reykjavik",
          country: "Iceland",
          long: -21.9426,
          lat: 64.1466,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          city: "Fredericton",
          country: "Canada",
          long: -66.6431,
          lat: 45.9636,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          city: "New York",
          country: "United States",
          long: -74.006,
          lat: 40.7128,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          city: "Playa del Carmen",
          country: "Mexico",
          long: -87.0739,
          lat: 20.6296,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          city: "Coxen Hole",
          country: "Honduras",
          long: -86.535,
          lat: 16.324,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          city: "Edinburgh",
          country: "Scotland",
          long: -3.1883,
          lat: 55.9533,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          city: "Vaduz",
          country: "Liechtenstein",
          long: 9.5209,
          lat: 47.141,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("visiteds", null, {});
  },
};
