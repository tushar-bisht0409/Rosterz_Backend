const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const resultSchema = new Schema({
    matchID: {
        type: String,
        require: false
    },
    organizer: {
        type: String,
        require: false
    },
    teamResult: [{
        teamName: String,
        points: String,
        prize: String,
        gPay: String,
        position: String, 
    }],
    matchType: {
        type: String,
        require: false
    },
    game: {
        type: String,
        require: false
    },
    poolPrize: {
        type: String,
        require: false
    },
});

module.exports = mongoose.model("results", resultSchema);