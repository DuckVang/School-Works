
const locations = require("../models/locations.js")
const orders = require("../models/orders.js")

let index = 0

class location {

    id
    address

    constructor(id, address) {
        this.id = id
        this.address = address
    }
}

module.exports = {

    get: (req, res) => {
        if(locations.length == 0) {res.send("no locations created"); return}
        let jsonString = JSON.stringify(locations);
        res.send(jsonString)

    },
    post: (req, res) => {

        let item = new location(index, "preslova" + index)
        locations.push(item)
        res.send("a location created "  + index++)
    },
    delete: (req, res) => {

        locations = locations.filter(location => location.id != req.locationId)
        orders = orders.filter(order => order.locationId != req.locationId)
        res.send("the location deleted")
    }


}