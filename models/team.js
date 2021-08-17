const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const teamSchema = new Schema({
    teamID: {
        type: String,
        require: false
    },
    userID: {
        type: String,
        require: false
    },
    matchID: {
        type: String,
        require: false
    },
    teamName: {
        type: String,
        require: false
    },
    players: [{
        type: String,
        require: false,
    }],
    playersID: [{
        type: String,
        require: false,
    }],
});

module.exports = mongoose.model("teams", teamSchema);