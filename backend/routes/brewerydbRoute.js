var express = require("express");
var request = require("request");
var brewerydbRoutes = express.Router();
var key = require("../middleware/key");

brewerydbRoutes.route("/:name")
    .get(function (req, res) {
        request("http://api.brewerydb.com/v2/breweries" + key + "&name=" + req.params.name, function (err, response, body) {
            if (err) throw err;
            res.send(body);
        })
    })

module.exports = brewerydbRoutes;
