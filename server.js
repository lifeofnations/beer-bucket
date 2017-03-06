var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var port = process.env.PORT || 2117;
var mongoose = require("mongoose");
var path = require("path");
var morgan = require("morgan");
var config = require("./backend/config");
var expressJwt = require("express-jwt");


app.use(express.static(path.join(__dirname, "public")));
app.use(bodyParser.json());
app.use(morgan("dev"));

app.use("/api", expressJwt({secret: config.secret}));

app.use("/auth", require("./backend/routes/authRoutes"));
app.use("/api/beers", require("./backend/routes/beerRoutes"));
app.use("/api/brewery", require("./backend/routes/breweryRoutes"));
app.use("/api/brewerydb", require("./backend/routes/brewerydbRoute"));
app.use("/categories", require("./backend/routes/categoryRoutes"));
app.use("/api/beerdb", require("./backend/routes/beerdbRoute"));




mongoose.connect(config.database, function (err) {
    if (err) throw err;
    console.log("dbGO!");
});
app.listen(port, function () {
    console.log("Engage!");
});