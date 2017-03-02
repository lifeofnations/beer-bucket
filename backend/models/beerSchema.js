var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var BeerSchema = new Schema({
    id: {
        type: String,
        required: true,
        unique: true
    },
    breweryId: String,
    inBucket: {
        type: Boolean,
        default: false
    },
    name: String,
    nameDisplay: String,
    description: String,
    abv: String,
    glasswareId: Number,
    availableId: Number,
    styleId: Number,
    isOrganic: String,
    labels: {
        icon: String,
        medium: String,
        large: String
    },
    glass: {
        id: Number,
        name: String
    },
    available: {
        id: Number,
        name: String,
        description: String
    },
    style: {
        id: Number,
        categoryId: Number
    }
});

module.exports = mongoose.model("Beer", BeerSchema);