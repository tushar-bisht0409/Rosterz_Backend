const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const statisticSchema = new Schema({
    userID: {
        type: String,
        require: false
    },
    matchResult: [{
        matchID: String,
        game: String,
        position: String,
        points: String,
        type: String,
        tournamentID: String,
        roundName: String,
        groupName: String,
    }],
},
{
    timestamps: true,
});

module.exports = mongoose.model("Statistics", statisticSchema);