const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const feedbackSchema = new Schema({
    userID: {
        type: String,
        require: false
    },
    feedback: {
        type: String,
        require: false
    },
    timeStamp: {
        type: String,
        require: false
    },
});

module.exports = mongoose.model("feedbacks", feedbackSchema);