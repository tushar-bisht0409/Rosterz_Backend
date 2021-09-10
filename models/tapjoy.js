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
},
{
    timestamps: true,
});

module.exports = mongoose.model("tapjoy", tapjoySchema);