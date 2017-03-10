var express = require("express");
var userRoutes = express.Router();
var User = require("../models/userSchema");


userRoutes.route("/")
    .put(function (req, res) {
        User.findOne({_id: req.body._id}, function (err, user) {
            if (err) return res.status(500).send(err);
            if (!user) return res.stat(403).send({message: "no user found"});
            for (var key in req.body) {
                user[key] = req.body[key] || user[key];
            }
            user.save(function (err) {
                if (err) return res.status(500).send(err);
                res.send({success: true, message: "you are updated", user: user.withoutPassword()});
            })
        })
    });

userRoutes.route("/add")
    .put(function (req, res) {
        User.findOneAndUpdate({_id: req.body._id}, req.body, {new: true}, function (err, updated) {
            if (err) res.status(500).send(err);
            res.send({success: true, message: "added stuff": updated: updated})
        });
    });

module.exports = userRoutes;



