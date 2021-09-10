const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const offerdaddy = new Schema({
    username: {
        type: String,
        require: false
    },
    amount: {
        type: String,
        require: false
    },
    transaction_id: {
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
    virtual_currency: {
        type: String,
        require: false
    },
    userid: {
        type: String,
        require: false
    },
    signature: {
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
    timeStamp: {
        type: String,
        require: false
    },

},
{
    timestamps: true,
});

module.exports = mongoose.model("offerdaddy", offerdaddy);