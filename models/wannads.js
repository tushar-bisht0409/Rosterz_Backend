const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const wannads = new Schema({
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
    transId: {
        type: String,
        require: false
    },
    reward: {
        type: String,
        require: false
    },
    payout: {
        type: String,
        require: false
    },
    signature: {
        type: String,
        require: false
    },
    status: {
        type: String,
        require: false
    },
    userIp: {
        type: String,
        require: false
    },
    country: {
        type: String,
        require: false
    },
    uuid: {
        type: String,
        require: false
    },
    subId2: {
        type: String,
        require: false
    },
    timeStamp: {
        type: String,
        require: false
    },

});

module.exports = mongoose.model("wannads", wannads);

