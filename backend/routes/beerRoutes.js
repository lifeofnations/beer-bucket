var express = require("express");
var beerRoutes = express.Router();
var Beer = require("../models/beerSchema");

beerRoutes.route("/")
    .get(function (req, res) {
        Beer.find(req.query, function (err, beers) {
            if (err) return res.status(500).send(err);
            res.send(beers);
        });
    })
    .post(function (req, res) {
        //var beer = new Beer(req.body);
        Beer.(req.body).then(function (err) {
            if (err) return res.status(500).send(err);
            res.status(201).send("completed");
        });
    });

beerRoutes.route("/:id")
    .get(function (req, res) {
        Beer.findById(req.params.id, function (err, oneBeer) {
            if (err) return res.status(500).send(err);
            res.send(oneBeer);
        });
    })
    .put(function (req, res) {
        Beer.findByIdAndUpdate(req.params.id, req.body, {new: true}, function (err, updatedBeer) {
            if (err) return res.status(500).send(err);
            res.send(updatedBeer);
        });
    })
    .delete(function (req, res) {
        Beer.findByIdAndRemove(req.params.id, function (err) {
            if (err) return res.status(500).send(err);
            res.send({seekAndDestroy: "success!"});
        });
    });

module.exports = beerRoutes;