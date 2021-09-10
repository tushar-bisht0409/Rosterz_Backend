const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const affinteractiveSchema = new Schema({
    id: {
        type: String,
        require: false
    },
    s1: {
        type: String,
        require: false
    },
    amount: {
        type: String,
        require: false
    },
    status: {
        type: String,
        require: false
    },
    eid: {
        type: String,
        require: false
    },
    name: {
        type: String,
        require: false
    },
    reason: {
        type: String,
        require: false
    },
},
{
    timestamps: true,
});

module.exports = mongoose.model("Affinteractives", affinteractiveSchema);