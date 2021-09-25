const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const tournamentSchema = new Schema({
    tournamentID: {
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
    description: {
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
    startDate: {
        type: String,
        require: false 
    },
    endDate: {
        type: String,
        require: false 
    },
    teams: [{
        teamID: String,
        teamName: String,
    }],
    teamIDs: [{
        type: String,
        require: false,
    }],
    userIDs: [{
        type: String,
        require: false,
    }],
    rounds: [{
        type: String,
        require: false,
    }],
    game: {
        type: String,
        require: false
    },
    logoID: {
        type: String,
        require: false
    },
    status: {
        type: String,
        require: false,
        default: "open"
    },
    youtube: {
        type: String,
        require: false
    },
    discord: {
        type: String,
        require: false
    },
    instagram: {
        type: String,
        require: false
    },
    facebook: {
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
    prize: {
        type: String,
        require: false
    },
    playerCount: {
        type: Number,
        require: false,
        default: 0
    },
},
{
    timestamps: true,
});

module.exports = mongoose.model("tournaments", tournamentSchema);