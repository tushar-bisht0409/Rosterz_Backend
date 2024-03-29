const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const roundResultSchema = new Schema({
    roundName: {
        type: String,
        require: false
    },
    tournamentID: {
        type: String,
        require: false
    },
    game: {
        type: String,
        require: false
    },
    teamsQualified: [{
        teamID: String,
        teamName: String,
    }],
},
{
    timestamps: true,
});

module.exports = mongoose.model("roundresults", roundResultSchema);