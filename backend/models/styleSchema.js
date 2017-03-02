var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var StyleSchema = new Schema({
        id : Number,
        srmMax : String,
        ibuMax : String,
        srmMin : String,
        description : String,
        fgMin : String,
        ibuMin : String,
        fgMax : String,
        abvMax : String,
        ogMin : String,
        abvMin : String,
        name : String,
        // categoryId : {
        //     type: mongoose.Schema.Types.id,
        //     ref: "Category"
        // }
    });

module.exports = mongoose.model("Style", StyleSchema);