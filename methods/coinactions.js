
const UserInfo = require("../models/userinfo");
const mongoose = require("mongoose");

var functions = {
    updateCoins: function(req,res){
        var obj = req.body;
        var newCoins;
        if(obj.type === "add"){
            newCoins = parseFloat(obj.coinAmount);
        }
        else if(obj.type === "subtract"){
            newCoins = - parseFloat(obj.coinAmount);
        }
        UserInfo.findOneAndUpdate(
            {userID: obj.userID},
            { $inc: {coins: newCoins}},
            function(err,userInfo){
                if(err){
                    return res.json({
                        success: false,
                        msz: "Failed to Save",
                        erre: err
                    });
                }
                else{
                    return res.json({
                        success: true,
                        msz: "Saved Successfully",
                        ii: userInfo
                    });
            }
            });
    }
}

module.exports = functions;