const { Router } = require("express");

const router = new Router();

router.post("/login", async (request, response, next) => {
  try {
    console.log(request.body);
  } catch {
    console.log(`The login error is: ${error}`);
  }
});

router.post("/signup", async (request, response, next) => {
  try {
    console.log(request.body);
  } catch {
    console.log(`The signup error is: ${error}`);
  }
});

module.exports = router;
