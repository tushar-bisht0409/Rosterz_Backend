const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const roundResultSchema = new Schema({
    tournamentID: {
        type: String,
        require: false
    },
    round: { 
        type: String,
        require: false,
        default: "",
    },
    group: {
        type: String,
        require: false,
        default: "",
    },
    teamResult: [{
        teamID: String,
        teamName: String,
        points: String,
        position: String, 
    }],
    game: {
        type: String,
        require: false
    },
    description: {
        type: String,
        require: false,
        default: "",
    },
},
{
    timestamps: true,
});

module.exports = mongoose.model("roundResults", roundResultSchema);