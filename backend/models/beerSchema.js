var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var BeerSchema = new Schema({
    id: {
        type: String,
        required: false,
        unique: true
    },
    breweryId: String,
    reviews: [{
        user: {
            type: Schema.Types.ObjectId,
            required: true,
            unique: true
        },
        score: {
            type: Number,
            required: true
        },
        review: String

    }],
    name: String,
    nameDisplay: String,
    description: String,
    abv: String,
    ibu: String,
    srm: {
        id: Number,
        name: String,
        hex: String
    },
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