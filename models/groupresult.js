const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const groupResultSchema = new Schema({
    groupName: {
        type: String,
        require: false
    },
    roundName: {
        type: String,
        require: false
    },
    tournamentID: {
        type: String,
        require: false
    },
    teamResult: [{
        teamID: String,
        teamName: String,
        points: String,
        position: String, 
    }],
});

module.exports = mongoose.model("groupresults", groupResultSchema);