const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const roundSchema = new Schema({
    roundName: {
        type: String,
        require: false
    },
    tournamentID: {
        type: String,
        require: false
    },
    allGroups: [{
        type: String,
        require: false,
    }],
    groupTeams: [{
        groupName: String,
        teamID: String,
        teamName: String,
    }],
    teamIDs: [{
        type: String,
        require: false,
    }],
    game: {
        type: String,
        require: false
    },
},
{
    timestamps: true,
});

module.exports = mongoose.model("rounds", roundSchema);