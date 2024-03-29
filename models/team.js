const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const teamSchema = new Schema({
    teamID: {
        type: String,
        require: false
    },
    teamName: {
        type: String,
        require: false
    },
    playersID: [{
        type: String,
        require: false,
    }],
    playersName: [{
        type: String,
        require: false,
    }],
    game: {
        type: String,
        require: false
    },
});

module.exports = mongoose.model("teams", teamSchema);