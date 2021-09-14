const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const adgatemediaSchema = new Schema({
    userID: {
        type: String,
        require: false
    },
    coins: {
        type: String,
        require: false
    },
    status: {
        type: String,
        require: false
    },
    offer_id: {
        type: String,
        require: false
    },
    offer_name: {
        type: String,
        require: false
    },
    payout: {
        type: String,
        require: false
    },
},
{
    timestamps: true,
});

module.exports = mongoose.model("adgatemedias", adgatemediaSchema);