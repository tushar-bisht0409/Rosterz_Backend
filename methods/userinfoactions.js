
const UserInfo = require("../models/userinfo");
const mongoose = require("mongoose");

var functions = {
    postUserInfo: function(req,res){
        var obj = req.body
            userinfo = new UserInfo({
                userID: obj.userID,
                fcmToken: obj.fcmToken,
                hostStatus: obj.hostStatus,
                inGameName: "Player",
                winCount: 0,
                looseCount: 0,
                coins: 10,
                primaryGame: "",
                secondaryGame:"",
                facebook: "https://www.facebook.com/154453846746738",
                instagram: "https://instagram.com/rosterz_kt?utm_medium=copy_link",
                youtube: "https://youtube.com/channel/UCMrRpEE3yGmQOdr-IMV6NJg",
                hostStatus: "player",
                about: "",

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
    updateUserInfo: function(req,res){
        var obj = req.body;
        if(obj.type === "secondaryGame"){
        UserInfo.findOneAndUpdate(  
            {
                userID: obj.userID
            },
            {
               "secondaryGame": obj.newinfo,
            },function(err,info){
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
            });}
            else if(obj.type === "primaryGame"){
                UserInfo.findOneAndUpdate(  
                    {
                        userID: obj.userID
                    },
                    {
                        "primaryGame": obj.newinfo,
                    },function(err,info){
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
                    });}
                    else if(obj.type === "facebook"){
                        UserInfo.findOneAndUpdate(  
                            {
                                userID: obj.userID
                            },
                            {
                                "facebook": obj.newinfo,
                            },function(err,info){
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
                            });}
                            else if(obj.type === "instagram"){
                                UserInfo.findOneAndUpdate(  
                                    {
                                        userID: obj.userID
                                    },
                                    {
                                        "instagram": obj.newinfo,
                                    },function(err,info){
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
                                    });}
                                    else if(obj.type === "youtube"){
                                        UserInfo.findOneAndUpdate(  
                                            {
                                                userID: obj.userID
                                            },
                                            {
                                                "youtube": obj.newinfo,
                                            },function(err,info){
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
                                            });}
                                            else if(obj.type === "loco"){
                                                UserInfo.findOneAndUpdate(  
                                                    {
                                                        userID: obj.userID
                                                    },
                                                    {
                                                        "loco": obj.newinfo,
                                                    },function(err,info){
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
                                                    });}
                                                    else if(obj.type === "about"){
                                                        UserInfo.findOneAndUpdate(  
                                                            {
                                                                userID: obj.userID
                                                            },
                                                            {
                                                                "about": obj.newinfo,
                                                            },function(err,info){
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
                                                            });}
                                                            else if(obj.type === "winCount"){
                                                                    var wCount = parseFloat(obj.newinfo);
                                                                UserInfo.findOneAndUpdate(
                                                                    {userID: obj.userID},
                                                                    { $inc: {winCount: wCount}},
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
                                                                    else if(obj.type === "star"){
                                                                        if(obj.starType === "true"){
                                                                            UserInfo.findOneAndUpdate(  
                                                                                {
                                                                                    userID: obj.receiverID
                                                                                },
                                                                                {
                                                                                    $push: {"star": obj.senderID},
                                                                                },function(err,info){
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
                                                                        }
                                                                        else if(obj.starType === "false"){
                                                                            UserInfo.findOneAndUpdate(  
                                                                                {
                                                                                    userID: obj.receiverID
                                                                                },
                                                                                {
                                                                                    $pull: {"star": obj.senderID},
                                                                                },function(err,info){
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
                                                                        }
                                                                        
                                                                        }
    }
}

module.exports = functions;