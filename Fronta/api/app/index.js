const express = require("express")
const app = express()

app.use('/static', express.static('public'))

const router = require("./routes/index.js")

app.use("/api",router)

module.exports = app
