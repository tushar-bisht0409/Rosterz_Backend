const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userInfoSchema = new Schema({
    userID: {
        type: String,
        require: false
    },
    fcmToken: {
        type: String,
        require: false
    },
    matchJoined: [{
        type: String,
        require: false,
    }],
    matchHosted: [{
        type: String,
        require: false,
    }],
    gPay: {
        type: String,
        require: false
    },
    money: {
        type: String,
        require: false
    },
    hostStatus: {
        type: String,
        require: false
    },
});

module.exports = mongoose.model("userInfo", userInfoSchema);