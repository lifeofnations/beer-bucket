var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var port = process.env.PORT || 2117;
var mongoose = require("mongoose");
var path = require("path");
var morgan = require("morgan");
var


app.use(express.static(path.join(__dirname, "public")));
app.use(bodyParser.json());
app.use(morgan("dev"));
app.use("/database-builder", require("./backend/"));

app.use("/beers", require("./backend/routes/beerRoutes"));
app.use("/brewery", require("./backend/routes/breweryRoutes"));
app.use("/brewerydb", require("./backend/routes/brewerydbRoute"));
app.use("/categories", require("./backend/routes/categoryRoutes"));
app.use("/beerdb", require("./backend/routes/beerdbRoute"));




mongoose.connect("mongodb://localhost/beerbucket", function (err) {
    if (err) throw err;
    console.log("dbGO!");
});
app.listen(port, function () {
    console.log("Engage!");
});