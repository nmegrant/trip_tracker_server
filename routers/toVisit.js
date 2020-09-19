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

module.exports = router;
