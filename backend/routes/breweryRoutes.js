var express = require("express");
var breweryRoutes = express.Router();
var Brewery = require("../models/brewerySchema");

breweryRoutes.route("/")
    .get(function (req, res) {
        Brewery.find(function (err, brewerys) {
            if (err) return res.status(500).send(err);
            res.send(brewerys);
        });
    })
    .post(function (req, res) {
        var brewery = new Brewery(req.body);
        brewery.save(function (err) {
            if (err) return res.status(500).send(err);
            res.status(201).send(brewery);
        });

    });

breweryRoutes.route("/:id")
    .get(function (req, res) {
        Brewery.findById(req.params.id, function (err, oneBrewery) {
            if (err) return res.status(500).send(err);
            res.send(oneBrewery);
        });
    })
    .put(function (req, res) {
        Brewery.findByIdAndUpdate(req.params.id, req.body, {new: true}, function (err, updatedBrewery) {
            if (err) return res.status(500).send(err);
            res.send(updatedBrewery);
        });
    })
    .delete(function (req, res) {
        Brewery.findByIdAndRemove(req.params.id, function (err) {
            if (err) return res.status(500).send(err);
            res.send({seekAndDestroy: "success!"});
        });
    });

module.exports = breweryRoutes;