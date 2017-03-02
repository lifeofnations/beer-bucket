var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var BrewerySchema = new Schema({
    id: {
        type: String,
        required: true,
        unique: true
    },
    name: String,
    nameShortDisplay: String,
    description: String,
    website: String,
    established: String,
    isOrganic: String,
    images: {
        icon: String,
        medium: String,
        large: String,
        squareMedium: String,
        squareLarge: String
    }

});

module.exports = mongoose.model("Brewery", BrewerySchema);