
const UserInfo = require("../models/userinfo");
const mongoose = require("mongoose");

var functions = {
    postUserInfo: function(req,res){
        var obj = req.body
            userinfo = new UserInfo({
                userID: obj.userID,
                fcmToken: obj.fcmToken,
                hostStatus: obj.hostStatus
            });
            userinfo.save(function(err, match){
                if(err){
                    return res.json({
                        success: false,
                        msz: "Failed to Save"
                    });
                }
                else{
                    return res.json({
                        success: true,
                        msz: "Successfully Saved"
                    });
                }
            });
        
    },
    getUserInfo: function(req,res){
        var obj = req.query;
        UserInfo.find({
            userID: obj.userID
        }, function(err,userinfo){
            if(err) throw err;
                if(!userinfo){
                    return res.send({success: false, msz:"No UserInfo Found"});                  
                }
                else{
                    if(userinfo.length === 0){
                        return res.send({success: false, msz:"No UserInfo Found"});
                    }
                    else{
                        return res.send({success: true, msz: userinfo}); 
                }}
        });
    },
    updateFcmToken: function(req,res){
        var obj = req.body;
        UserInfo.findOneAndUpdate({
            userID: obj.userID
        },
        {
            "fcmToken": obj.fcmToken
        }
        , function(err,user){
            if(err){
                return res.json({
                    success: false,
                    msz: "Failed to Save"
                });
            }
            else{
                return res.json({
                    success: true,
                    msz: "Saved Successfully"
                });
            }
        });
    },
    joinhost: function(req,res){
        var obj = req.body;
        if(obj.type === "join"){
        UserInfo.findOneAndUpdate({
            userID: obj.userID
        },
        {
            $push: {"matchJoined": obj.matchID}
        }
        , function(err,match){
            if(err){
                return res.json({
                    success: false,
                    msz: "Failed to Save"
                });
            }
            else{
                return res.json({
                    success: true,
                    msz: "Saved Successfully"
                });
            }
        });
    }
    else if(obj.type === "host"){
        UserInfo.findOneAndUpdate({
            userID: obj.userID
        },
        {
            $push: {"matchHosted": obj.matchID}
        }
        , function(err,match){
            if(err){
                return res.json({
                    success: false,
                    msz: "Failed to Save"
                });
            }
            else{
                return res.json({
                    success: true,
                    msz: "Saved Successfully"
                });
            }
        });
    }
    },
    getFcmTokenList: function(req,res){
        var obj = req.query;
        UserInfo.find({
            userID: {$in: obj.userIDs}
        }, function(err,userinfo){
            if(err) throw err;
                if(!userinfo){
                    return res.send({success: false, msz:"No UserInfo Found"});                  
                }
                else{
                    if(userinfo.length === 0){
                        return res.send({success: false, msz:"No UserInfo Found"});
                    }
                    else{
                        var tokenArr = new Array();
                        for(let i = 0; i<userinfo.length;i++){ 
                            tokenArr.push(userinfo[i]['fcmToken']);
                        }
                        return res.send({success: true, msz: tokenArr}); 
                }}
        });
    },
    removejoinhost: function(req,res){
        var obj = req.body;
        UserInfo.findOneAndUpdate({
            userID: obj.userID
        },
        {
            $pull: {"matchJoined": obj.matchID}
        }
        , function(err,match){
            if(err){
                return res.json({
                    success: false,
                    msz: "Failed to Save"
                });
            }
            else{
                return res.json({
                    success: true,
                    msz: "Saved Successfully"
                });
            }
        });
    
    },
    
    
}

module.exports = functions;