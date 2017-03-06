var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var userSchema = new Schema({
    userName: {
        type: String,
        required: true,
        unique: true,
        lowercase: true
    },
    password: {
        type: String,
        required: true
    },
    beersInBucket: [{
        type: Schema.Types.ObjectId,
        ref: "Beer"
    }],
    completedBeers: [{
        type: Schema.Types.ObjectId,
        ref: "Beer"
    }],
    admin: {
        type: Boolean,
        default: false
    }
});

module.exports = mongoose.model("User", userSchema);