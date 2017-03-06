var express = require("express");
var request = require("request");
var brewerydbRoutes = express.Router();
var config = require("../config.js");

brewerydbRoutes.route("/:name")
    .get(function (req, res) {
        request("http://api.brewerydb.com/v2/breweries" + config.key + "&name=" + req.params.name, function (err, response, body) {
            if (err) throw err;
            res.send(body);
        })
    });

module.exports = brewerydbRoutes;
