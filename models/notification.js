const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const notificationSchema = new Schema({
    matchID: {
        type: String,
        require: false
    },
    title: {
        type: String,
        require: false
    },
    body: {
        type: String,
        require: false,
    },
    game: {
        type: String,
        require: false,
    },
    organizer: {
        type: String,
        require: false
    },
    timeStamp: {
        type: String,
        require: false
    }
},
{
    timestamps: true,
});

module.exports = mongoose.model("notifications", notificationSchema);