var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var CategorySchema = new Schema({
    id: Number,
    name: String
});

module.exports = mongoose.model("Category", CategorySchema);
