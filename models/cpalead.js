const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const cpalead = new Schema({
    GAID: {
        type: String,
        require: false
    },
    campaignID: {
        type: String,
        require: false
    },
    payout: {
        type: String,
        require: false
    },

});

module.exports = mongoose.model("CPALEAD", cpalead);