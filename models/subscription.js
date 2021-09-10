const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const subscriptionSchema = new Schema({
    userID: {
        type: String,
        require: false
    },
    expire_at: {
        type: Date,
        default: Date.now(),
        expires: 2592000
    }
},
{
    timestamps: true,
});


module.exports = mongoose.model("subscriptions", subscriptionSchema);