const { Router } = require("express");
const UserVisitd = require("../models").userVisited;

const router = new Router();

router.get("/uservisited", async (request, response) => {
  try {
    const places = await UserVisitd.findAll();
    return response.status(200).send(places);
  } catch (error) {
    console.log(`Error fetching user visited places: ${error}`);
  }
});

module.exports = router;
