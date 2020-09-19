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
        },
        {
          city: "Sydney",
          country: "Australia",
          long: 151.20929,
          lat: -33.86882,
        },
        {
          city: "Apia",
          country: "Samoa",
          long: -171.760056,
          lat: -13.83282,
        },
        {
          city: "Nadi",
          country: "Fiji",
          long: 177.435623,
          lat: -17.776537,
        },
        {
          city: "Nuku'alofa",
          country: "Tonga",
          long: -175.216431,
          lat: -21.136009,
        },
        {
          city: "Singapore",
          country: "Singapore",
          long: 103.8198,
          lat: 1.3521,
        },
        {
          city: "Tokyo",
          country: "Japan",
          long: 139.6503,
          lat: 35.6762,
        },
        {
          city: "Madrid",
          country: "Spain",
          long: 3.7038,
          lat: 40.4168,
        },
        {
          city: "Lisbon",
          country: "Portugal",
          long: 9.1393,
          lat: 38.7223,
        },
        {
          city: "Paris",
          country: "France",
          long: 2.3522,
          lat: 48.8566,
        },
        {
          city: "Brussels",
          country: "Belgium",
          long: 4.3517,
          lat: 50.8503,
        },
        {
          city: "Amsterdam",
          country: "The Netherlands",
          long: 4.9041,
          lat: 52.3676,
        },
        {
          city: "Berlin",
          country: "Germany",
          long: 13.405,
          lat: 52.52,
        },
        {
          city: "London",
          country: "England",
          long: 0.1278,
          lat: 51.5074,
        },
        {
          city: "Innsbruck",
          country: "Austria",
          long: 11.4041,
          lat: 47.2692,
        },
        {
          city: "Lucerne",
          country: "Switzerland",
          long: 8.3093,
          lat: 47.0502,
        },
        {
          city: "Tromso",
          country: "Norway",
          long: 18.9553,
          lat: 69.6492,
        },
        {
          city: "Reykjavik",
          country: "Iceland",
          long: 21.9426,
          lat: 64.1466,
        },
        {
          city: "Fredericton",
          country: "Canada",
          long: 66.6431,
          lat: 45.9636,
        },
        {
          city: "New York",
          country: "United States",
          long: 74.006,
          lat: 40.7128,
        },
        {
          city: "Playa del Carmen",
          country: "Mexico",
          long: 87.0739,
          lat: 20.6296,
        },
        {
          city: "Coxen Hole",
          country: "Honduras",
          long: 16.324,
          lat: 86.535,
        },
        {
          city: "Edinburgh",
          country: "Scotland",
          long: 3.1883,
          lat: 55.9533,
        },
        {
          city: "Vaduz",
          country: "Liechtenstein",
          long: 9.5209,
          lat: 47.141,
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("visiteds", null, {});
  },
};
