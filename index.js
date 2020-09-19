const express = require("express")
const app = express()
const PORT - process.env.PORT || 4000

const bodyParserMiddleWare = express.json()
app.use(bodyParserMiddleWare)

const corsMiddleWare = require("cors")
app.use(corsMiddleWare)

app.listen(PORT, () => {
    console.log(`Now listening on port: ${PORT}`)
})

module.exports = app