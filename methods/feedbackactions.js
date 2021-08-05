const Feedback = require("../models/feedback");
const mongoose = require("mongoose");

var functions = {
    sendFeedback: function(req,res){
        var obj = req.body
            feedbackinfo = new Feedback({
                feedback: obj.feedback,
                timeStamp: obj.timeStamp,
                userID: obj.userID,
            });
            feedbackinfo.save(function(err, feedback){
                if(err){
                    return res.json({
                        success: false,
                        msz: "Failed to Sent"
                    });
                }
                else{
                    return res.json({
                        success: true,
                        msz: "Successfully Sent"
                    });
                }
            });
        
    }
}

module.exports = functions;