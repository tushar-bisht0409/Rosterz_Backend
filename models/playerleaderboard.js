const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const playerleaderboardSchema = new Schema({
    userID: {
        type: String,
        require: false
    },
    totalWins: {
        type: Number,
        require: false,
        default: 0
    },  
    league: {
        type: String,
        require: false,
        default: ""
    },   
    org: {
        type: String,
        require: false,
        default: ""
    },
    game: {
        type: String,
        require: false,
    },
},
{
    timestamps: true,
});

module.exports = mongoose.model("playerleaderboards", playerleaderboardSchema);