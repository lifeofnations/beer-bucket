var express = require("express");
var authRoutes = express.Router();
var jwt = require("jsonwebtoken");
var config = require("../config");
var User = require("../models/userSchema");

authRoutes.route("/signup")
    .post(function (req, res) {
        User.find({userName: req.body.userName}, function (err, existingUser) {
            if (err) return res.status(500).send(err);
            if (existingUser.length) return res.send({success: false, message: "User already exists"});
            var newUser = new User(req.body);
            newUser.save(function (err) {
                if (err) return res.status(500).send(err);
                res.status(201).send({success: true, user: newUser, message: "Welcome to Beer Bucket!"});
            })
        })
    });

authRoutes.route("/login")
    .post(function (req, res) {
        User.findOne({userName: req.body.userName}, function (err, user) {
            if (err) return res.status(500).send(err);
            if (!user || user.password !== req.body.password) {
                return res.status(401).send({success: false, message: "Invalid username or password."})
            }
            var token = jwt.sign(user.toObject(), config.secret, {expiresIn: "1h"});
            res.send({success: true, token: token, user: user.toObject(), message: "Welcome Back!"});
        })
    });


module.exports = authRoutes;