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
    tournamentJoined: [{
        type: String,
        require: false,
    }],
    tournamentHosted: [{
        type: String,
        require: false,
    }],
    allGames: [{
        type: String,
        require: false,
    }],
    teams: [{
        game: String,
        teamID: String,
        teamName: String,
        inGameName: String,
    }],
    gPay: {
        type: String,
        require: false
    },
    inGameName: {
        type: String,
        require: false
    },
    coins: {
        type: Number,
        require: false
    },
    hostStatus: {
        type: String,
        require: false
    },
    winCount: {
        type: Number,
        require: false
    },
    looseCount: {
        type: Number,
        require: false
    },
    primaryGame: {
        type: String,
        require: false
    },
    secondaryGame: {
        type: String,
        require: false
    },
    about: {
        type: String,
        require: false
    },
    star: [{
        type: String,
        require: false,
    }],
    instagram: {
        type: String,
        require: false,
    },
    facebook: {
        type: String,
        require: false,
    },
    youtube: {
        type: String,
        require: false,
    },
    loco: {
        type: String,
        require: false,
    },
});

module.exports = mongoose.model("userInfo", userInfoSchema);