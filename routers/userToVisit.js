const { Router } = require("express");
const UserToVisit = require("../models").userToVisit;

const router = new Router();

router.get("/usertovisit", async (request, response) => {
  try {
    const places = await UserToVisit.findAll();
    return response.status(200).send(places);
  } catch (error) {
    console.log(`Error fetching user to visit places: ${error}`);
  }
});

module.exports = router;
