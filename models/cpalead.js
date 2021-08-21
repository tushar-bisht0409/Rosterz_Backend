const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const cpalead = new Schema({
    campaign_id: {
        type: String,
        require: false
    },
    campaign_name: {
        type: String,
        require: false
    },
    subid: {
        type: String,
        require: false
    },
    subid2: {
        type: String,
        require: false
    },
    subid3: {
        type: String,
        require: false
    },
    payout: {
        type: String,
        require: false
    },
    ip_address: {
        type: String,
        require: false
    },
    gateway_id: {
        type: String,
        require: false
    },
    lead_id: {
        type: String,
        require: false
    },
    country_iso: {
        type: String,
        require: false
    },
    password: {
        type: String,
        require: false
    },
    virtual_currency: {
        type: String,
        require: false
    },
    timeStamp: {
        type: String,
        require: false
    },

});

module.exports = mongoose.model("CPALEAD", cpalead);

