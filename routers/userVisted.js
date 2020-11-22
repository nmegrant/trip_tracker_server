const { Router } = require("express");
const UserVisitd = require("../models").userVisited;
const authMiddleware = require("../auth/middleware");

const router = new Router();

router.get("/uservisited", authMiddleware, async (request, response) => {
  try {
    console.log(request);
    const places = await UserVisitd.findAll();
    return response.status(200).send(places);
  } catch (error) {
    console.log(`Error fetching user visited places: ${error}`);
  }
});

module.exports = router;
