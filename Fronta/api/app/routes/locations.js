const router = require('express').Router()
const locations = require("../models/locations")
const locationsController = require("../controllers/locationsController")

const ordersRouter = require("./orders")


router.get("/", locationsController.get)
router.post("/",locationsController.post)

router.use("/:id", (req,res,next) => {

    if(locations.filter(location => location.id == req.params.id).length ==0) res.send("location not found")
    else next()
})
router.delete("/:id", locationsController.delete)

router.use("/:id/orders",function (req, res, next) {
    req.locationId = req.params.id
    next();        
},ordersRouter)




module.exports = router