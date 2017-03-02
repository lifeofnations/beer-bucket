var express = require("express");
var request = require("request");
var beerdbRoutes = express.Router();
var key = require("../middleware/key");

beerdbRoutes.route("/:id")
    .get(function (req, res) {
        request("http://api.brewerydb.com/v2/brewery/" + req.params.id + "/beers" + key, function (err, response, body) {
            if (err) throw err;
            res.send(body);
        })
    })

module.exports = beerdbRoutes;