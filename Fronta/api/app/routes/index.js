
const router = require('express').Router()

const locationsRoute = require("./locations")

router.use("/locations", locationsRoute)

module.exports = router
