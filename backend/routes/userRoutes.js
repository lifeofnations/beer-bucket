var express = require("express");
var userRoutes = express.Router();
var User = require("../models/userSchema");


userRoutes.route("/")
    .put(function (req, res) {
        User.findOneAndUpdate({_id: req.body._id}, req.body, {new: true}, function (err, updatedUser) {
            if (err) return res.status(500).send(err);
            res.send(updatedUser);
        })
    })



