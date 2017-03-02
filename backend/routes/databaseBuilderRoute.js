var express = require("express");
var builderRoute = express.Router();
var request = require("request");
var key = require("../middleware/key");
var Style = require("../models/styleSchema");
var Category = require("../models/categorySchema");

builderRoute.route("/")
    .get(function (req, res) {
        request("http://api.brewerydb.com/v2/categories" + key, function (err, response, body) {
            if (err) throw err;
            body
        })
    })


module.exports = builderRoute;