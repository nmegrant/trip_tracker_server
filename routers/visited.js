const { Router } = require("express");
const Visited = require("../models").visited;
const ToVisit = require("../models").toVisit;

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
  try {
    const toVisit = await ToVisit.findOne({
      where: { city: city, country: country },
    });
    if (toVisit) {
      await toVisit.destroy();
    }

    const newVisited = await Visited.create({
      city,
      country,
      long,
      lat,
    });
    return response.status(201).send({ ...newVisited.dataValues });
  } catch (error) {
    console.log(`Error for adding new visited place: ${error}`);
  }
});

module.exports = router;
