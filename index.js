const express = require("express");
const app = express();
const PORT = process.env.PORT || 4000;
const visited = require("./routers/visited");
const toVisit = require("./routers/toVisit");
const user = require("./routers/user");
const userToVisit = require("./routers/userToVisit");
const userVisited = require("./routers/userVisted");

const bodyParserMiddleWare = express.json();
app.use(bodyParserMiddleWare);

const corsMiddleWare = require("cors");
app.use(corsMiddleWare());

app.use(visited);
app.use(toVisit);
app.use(user);
app.use(userToVisit);
app.use(userVisited);

app.listen(PORT, () => {
  console.log(`Now listening on port: ${PORT}`);
});

module.exports = app;
