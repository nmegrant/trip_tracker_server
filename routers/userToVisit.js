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

module.exports = router;
