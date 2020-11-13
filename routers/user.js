const { Router } = require("express");
const User = require("../models").user;
const bcrypt = require("bcrypt");

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
    const { firstName, lastName, email, password, country } = request.body;
    if (!email || !password || !firstName || !lastName) {
      return response
        .status(400)
        .send({ message: "Please supply the required information." });
    }
    const newUser = await User.create({
      email,
      password: bcrypt.hashSync(password, 10),
      firstName,
      lastName,
      country,
    });
    delete newUser.dataValues["password"];
    response.status(201).send({ token, ...newUser.dataValues });
  } catch (error) {
    if (error.name === "SequelizeUniqueConstraintError") {
      return response
        .status(400)
        .send({ message: "There is an existing account with this email." });
    }
    return response.status(400).send({ message: "Something went wrong" });
  }
});

module.exports = router;
