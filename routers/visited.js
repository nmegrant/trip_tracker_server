const { Router } = require("express");
const Visited = require("../models").visited;

const router = new Router();

router.get("/visited", async (request, response) => {
  try {
    const places = await Visited.findAll();
    return response.status(200).send(places);
  } catch (error) {
    console.log(`Error fetching visited pages: ${error}`);
  }
});

router.post("/visited", async (request, response) => {
  const { city, country, long, lat } = request.body;
  console.log(city, country, long, lat);
});

module.exports = router;
