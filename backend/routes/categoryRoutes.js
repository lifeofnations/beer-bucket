var express = require("express");
var categoryRoutes = express.Router();
var Category = require("../models/categorySchema");
var Style = require("../models/styleSchema");

categoryRoutes.route("/")
    .get(function (req, res) {
        Category.find(function (err, categories) {
            if (err) return res.status(500).send(err);
            res.send(categories);
        })
    });

categoryRoutes.route("/:id")
    .get(function (req, res) {
        req.query.categoryId = Number(req.params.id);
        Style.find(req.query, function (err, styles) {
            if (err) return res.status(500).send(err);
            res.send(styles);
        })
    });

module.exports = categoryRoutes;