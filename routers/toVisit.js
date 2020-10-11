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
    console.log(`Error for adding new to visit place: ${error}`);
  }
});

router.delete("/tovisit", async (request, response) => {
  const { city, country } = request.body;
  const toVisit = await ToVisit.findOne({
    where: { city: city, country: country },
  });
  if (!toVisit) {
    console.log("No city yet in to visit");
    return response.status(205);
  }
  await toVisit.destroy();
  const updatedToVisit = ToVisit.findAll();
  return response.status(204).send(updatedToVisit.dataValues);
});

module.exports = router;
