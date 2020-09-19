const { Router } = require("express");
const Visited = require("../models").visited;

const router = new Router();

router.get("/visited", async (request, response) => {
  try {
    const places = await Visited.findAll();
    console.log(places);
    return response.status(200).send(places);
  } catch (error) {
    console.log(`Error fetching visited pages: ${error}`);
  }
});

module.exports = router;
