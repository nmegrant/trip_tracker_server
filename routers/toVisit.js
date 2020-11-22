const { Router } = require("express");
const ToVisit = require("../models").toVisit;

const router = new Router();

router.get("/tovisit", async (request, response) => {
  try {
    const places = await ToVisit.findAll();
    return response.status(200).send(places);
  } catch (error) {
    console.log(`Error fetching to visit places: ${error}`);
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
  try {
    const { city, country } = request.body;
    if (!city || !country) {
      return response.status(404);
    }

    const toVisitDelete = await ToVisit.findOne({
      where: { city: city, country: country },
    });
    if (!toVisitDelete) {
      return response.status(205);
    }

    await toVisitDelete.destroy();
    const updatedToVisit = await ToVisit.findAll();
    return response.status(200).send(updatedToVisit);
  } catch (error) {
    console.log(`Error deleting a toVisit place: ${error}`);
  }
});

module.exports = router;
