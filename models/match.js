const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const matchSchema = new Schema({
    matchID: {
        type: String,
        require: false
    },
    organizer: {
        type: String,
        require: false
    },
    userID: {
        type: String,
        require: false
    },
    map: {
        type: String,
        require: false
    },
    maxPlayers: {
        type: String,
        require: false
    },
    minPlayers: {
        type: String,
        require: false
    },
    totalSlots: {
        type: String,
        require: false
    },
    matchTime: {
        type: String,
        require: false
    },
    idTime: {
        type: String,
        require: false 
    },
    teams: [{
        type: String,
        require: false,
    }],
    matchType: {
        type: String,
        require: false
    },
    game: {
        type: String,
        require: false
    },
    status: {
        type: String,
        require: false
    },
    matchLink: {
        type: String,
        require: false
    },
    registeredBy: [{
        type: String,
        require: false,
    }],
    entryFee: {
        type: String,
        require: false
    },
    poolPrize: {
        type: String,
        require: false
    },
    playerCount: {
        type: Number,
        require: false
    },
});

module.exports = mongoose.model("matches", matchSchema);