const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const teamleaderboardSchema = new Schema({
    teamID: {
        type: String,
        require: false
    },  
    points: {
        type: String,
        require: false
    }, 
    league: {
        type: String,
        require: false
    },   
    org: {
        type: String,
        require: false
    },
    game: {
        type: String,
        require: false
    },
},
{
    timestamps: true,
});

module.exports = mongoose.model("teamleaderboards", teamleaderboardSchema);