const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const paymentSchema = new Schema({
    userID: {
        type: String,
        require: false
    },
    method: {
        type: String,
        require: false
    },
    amount: {
        type: String,
        require: false
    },
    status: {
        type: String,
        require: false
    }
});

module.exports = mongoose.model("payments", paymentSchema);