const { Router } = require("express");
const UserToVisit = require("../models").userToVisit;
const authMiddleware = require("../auth/middleware");

const router = new Router();

router.get("/usertovisit", authMiddleware, async (request, response) => {
  try {
    const places = await UserToVisit.findAll({
      where: { userId: request.user.id },
    });
    return response.status(200).send(places);
  } catch (error) {
    console.log(`Error fetching user to visit places: ${error}`);
  }
});

router.post("/usertovisit", authMiddleware, async (request, response) => {
  const { city, country, date, days, long, lat } = request.body;
  const userId = request.user.id;
  try {
    const newTrip = await UserToVisit.create({
      city,
      country,
      date: new Date(date),
      days,
      userId,
      long,
      lat,
    });
    return response.status(200).send({ ...newTrip.dataValues });
  } catch (error) {
    console.log(`Error creating new user trip: ${error}`);
  }
});

module.exports = router;
