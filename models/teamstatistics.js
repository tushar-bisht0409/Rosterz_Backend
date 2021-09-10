const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const teamStatisticSchema = new Schema({
    teamID: {
        type: String,
        require: false
    },
    matchResult: [{
        matchID: String,
        position: String,
        mode: String,
        kill: String,
        total: String,
        org: String,
        league: String,
    }],
},
{
    timestamps: true,
});

module.exports = mongoose.model("TeamStatistics", teamStatisticSchema);