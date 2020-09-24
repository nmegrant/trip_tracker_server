const { Router } = require("express");
const ToVisit = require("../models").toVisit;

const router = new Router();

router.get("/tovisit", async (request, response) => {
  try {
    const places = await ToVisit.findAll();
    return response.status(200).send(places);
  } catch (error) {
    console.log(`Error fetching visited pages: ${error}`);
  }
});

router.post("/tovisit", async (request, response) => {
  const { city, country, long, lat } = request.body;
  try {
    const newVisited = await ToVisit.create({
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
