const { Router } = require("express");
const User = require("../models").users;
const bcrypt = require("bcrypt");
const { toJWT } = require("../auth/jwt");

const router = new Router();

router.post("/login", async (request, response, next) => {
  try {
    const { email, password } = request.body;
    if (!email || !password) {
      return response
        .status(400)
        .send({ message: "Please supply email and password." });
    }
    const user = await User.findOne({ where: { email } });
    if (!user || !bcrypt.compareSync(password, user.password)) {
      return response
        .status(400)
        .send({ message: "No user with that email or password is incorrect" });
    }
    console.log("here");
    delete user.dataValues["password"];
    const token = toJWT({ userId: user.id });
    return response.status(200).send({ token, ...user.dataValues });
  } catch (error) {
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
    const token = toJWT({ userId: newUser.id });
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
