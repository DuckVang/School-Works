
const { patch } = require("../index.js")
const locations = require("../models/locations.js")
const orders = require("../models/orders.js")

let index = 0


class order {


    id
    locationId
    status

    constructor(id, locationId, status) {
        this.id = id
        this.locationId = locationId
        this.status = status

    }

}

module.exports = {

    get: (req, res) => {
        let filtered = orders.filter(order => order.locationsId === req.locationId)
        let items = filtered.find(order => order.orderId === req.id)

        res.send(JSON.stringify(items))


    },
    post: (req, res) => {
        const item = new order(index, req.locationId, "Created")
        orders.push(item)
        res.send("Created: " + index++)
    },
    delete: (req, res) => {

        let filtered = orders.filter(order => order.locationsId === req.locationId)
        let item = filtered.filter(order => order.orderId === req.id)
        let index = orders.indexOf(item)
        orders.splice(index, 1);
        res.send("the order deleted")
    },
    patch: (req,res) => {

        let filtered = orders.filter(order => order.locationsId === req.locationId)
        let item = filtered.filter(order => order.orderId === req.id)
        let index = orders.indexOf(item)

        orders[index].status = req.status

        res.send("the order updated")
        
    }



}