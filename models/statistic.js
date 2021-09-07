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
        mode: String,
        kill: String,
    }],
});

module.exports = mongoose.model("Statistics", statisticSchema);