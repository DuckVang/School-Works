const router = require('express').Router()

const ordersController = require("../controllers/ordersController.js")
const orders = require('../models/orders.js')

const ordersRouter = require("./orders")




router.get("/", ordersController.get)
router.post("/", ordersController.post)

router.use("/:id", (req, res, next) => {

    let filtered = orders.filter(order => order.locationsId === req.locationId)
    if (filtered.filter(order => order.id == req.params.id).length == 0) res.send("the order not found")
    else next()

})

router.get("/:id", ordersController.get)
router.delete("/:id", ordersController.delete)
router.patch("/:id/:status", (req, res, next) => {
    req.status = req.params.status
    next()
}, ordersController.patch)




module.exports = router