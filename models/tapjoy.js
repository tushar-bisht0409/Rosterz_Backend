const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const tapjoySchema = new Schema({
    userID: {
        type: String,
        require: false
    },
    coins: {
        type: String,
        require: false
    },
});

module.exports = mongoose.model("tapjoy", tapjoySchema);