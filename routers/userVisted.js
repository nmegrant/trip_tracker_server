const { Router } = require("express");
const UserVisitd = require("../models").userVisited;
const authMiddleware = require("../auth/middleware");

const router = new Router();

router.get("/uservisited", authMiddleware, async (request, response) => {
  try {
    const places = await UserVisitd.findAll({
      where: { userId: request.user.id },
    });
    return response.status(200).send(places);
  } catch (error) {
    console.error(`Error fetching user visited places: ${error}`);
  }
});

router.post("/uservisited", authMiddleware, async (request, response) => {
  const { city, country, date, days, long, lat, rating } = request.body;
  const userId = request.user.id;
  try {
    const newTrip = await UserVisitd.create({
      city,
      country,
      date: new Date(date),
      days,
      userId,
      long,
      lat,
      ranking: rating,
    });
    return response.status(200).send({ ...newTrip.dataValues });
  } catch (error) {
    console.error(`Error creating new taken user trip: ${error}`);
  }
});

module.exports = router;
