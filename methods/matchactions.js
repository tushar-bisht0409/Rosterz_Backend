
const Match = require("../models/match");
const Team = require("../models/teamOld");
const Result = require("../models/result");
const mongoose = require("mongoose");

var functions = {
    postMatch: function(req,res){
        var obj = req.body
            matchinfo = new Match({
                matchID: obj.matchID,
                organizer: obj.organizer,
                userID: obj.userID,
                map: obj.map,
                maxPlayers: obj.maxPlayers,
                minPlayers: obj.minPlayers,
                totalSlots: obj.totalSlots,
                matchTime: obj.matchTime,
                idTime: obj.idTime,
                game: obj.game,
                matchType: obj.matchType,
                status: "open",
                matchLink: obj.matchLink,
                entryFee: obj.entryFee,
                poolPrize: obj.poolPrize,
                playerCount: 0,
            });
            matchinfo.save(function(err, match){
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
    getMatch: function(req,res){
        var obj = req.query;
        if(obj.getBy === "game"){
        Match.find({
            game: obj.game
        }, function(err,matches){
            if(err) throw err;
                if(!matches){
                    return res.send({success: false, msz:"No Match Found"});                  
                }
                else{
                    if(matches.length === 0){
                        return res.send({success: false, msz:"No Match Found"});
                    }
                    else{
                        return res.send({success: true, msz: matches}); 
                }}
        });
    }
    else if(obj.getBy === "matchID"){
        Match.find({
            matchID: obj.matchID
        }, function(err,matches){
            if(err) throw err;
                if(!matches){
                    return res.send({success: false, msz:"No Match Found"});                  
                }
                else{
                    if(matches.length === 0){
                        return res.send({success: false, msz:"No Match Found"});
                    }
                    else{
                        return res.send({success: true, msz: matches}); 
                }}
        });
    }
    else if(obj.getBy === "matchType"){
        Match.find({
            matchType: obj.matchType
        }, function(err,matches){
            if(err) throw err;
                if(!matches){
                    return res.send({success: false, msz:"No Match Found"});                  
                }
                else{
                    if(matches.length === 0){
                        return res.send({success: false, msz:"No Match Found"});
                    }
                    else{
                        return res.send({success: true, msz: matches}); 
                }}
        });
    }else if(obj.getBy === "organizer"){
        Match.find({
            organizer: obj.organizer
        }, function(err,matches){
            if(err) throw err;
                if(!matches){
                    return res.send({success: false, msz:"No Match Found"});                  
                }
                else{
                    if(matches.length === 0){
                        return res.send({success: false, msz:"No Match Found"});
                    }
                    else{
                        return res.send({success: true, msz: matches}); 
                }}
        });
    }
    },
    postTeam: function(req,res){
        var obj = req.body;
        if(obj.matchType === "daily"){
            Match.findOneAndUpdate(  
                {
                    matchID: obj.matchID
                },
                {
                    $push: {"teams": obj.teamName,
                    "registeredBy": obj.userID},
                },function(err,teaminfo){
                        if(err){
                                return res.send({success: false, msz:"Something Went Wrong"});                  
                        }
                        else{  
                            teaminfo = new Team({
                                teamID: obj.teamID,
                                userID: obj.userID,
                                matchID: obj.matchID,
                                teamName: obj.teamName,
                                players: [obj.players],
                            });
                            teaminfo.save(function(err, team){
                                if(err){
                                    Match.findOneAndUpdate(  
                                        {
                                            matchID: obj.matchID
                                        },
                                        {
                                            $pull: {"teams": obj.teamName,
                                            "registeredBy": obj.userID},
                                        },function(err,teaminfo){});
                                    return res.json({
                                        success: false,
                                        msz: "Failed to Register"
                                    });
                                }
                                else{
                                    return res.json({
                                        success: true,
                                        msz: "Registered Successfully"
                                    });
                                }
                            });
                        }
                });
        }
        if(obj.matchType === "reward"){
            if(obj.type === "create"){
                Match.findOneAndUpdate(  
                    {
                        matchID: obj.matchID
                    },
                    {
                        $push: {"teams": obj.teamName,
                        "registeredBy": obj.userID},
                    },
                    function(err,teaminfo){
                            if(err){
                                    return res.send({success: false, msz:"Something Went Wrong"});                  
                            }
                            else{  
                                teaminfo = new Team({
                                    teamID: obj.teamID,
                                    matchID: obj.matchID,
                                    teamName: obj.teamName,
                                    players: [obj.players],
                                    playersID: [obj.userID],
                                    gPay: obj.gPay,
                                    userID: obj.userID
                                });
                                teaminfo.save(function(err, team){
                                    if(err){
                                        Match.findOneAndUpdate(  
                                            {
                                                matchID: obj.matchID
                                            },
                                            {
                                                $pull: {"teams": obj.teamName,
                                                "registeredBy": obj.userID},
                                            },function(err,teaminfo){});
                                        return res.json({
                                            success: false,
                                            msz: "Failed to Register"
                                        });
                                    }
                                    else{
                                        Match.findOneAndUpdate(
                                            {matchID: obj.matchID},
                                            { $inc: {playerCount: 1}},
                                            function(err,mm){
                                            });
                                        return res.json({
                                            success: true,
                                            msz: "Registered Successfully"
                                        });
                                    }
                                }); 
                            }
                    });
            } 
            else if(obj.type === "join"){
                Match.findOneAndUpdate(  
                    {
                        matchID: obj.matchID
                    },
                    {
                        $push: {"registeredBy": obj.userID}
                    },
                    function(err,teaminfo){
                            if(err){
                                    return res.send({success: false, msz:"Something Went Wrong"});                  
                            }
                            Team.findOneAndUpdate(  
                                {
                                    teamID: obj.teamID
                                },
                                {
                                    $push: {"players": obj.players,
                                "playersID": obj.userID}
                                },
                                function(err,teaminfo){
                                    if(err){
                                        Match.findOneAndUpdate(  
                                            {
                                                matchID: obj.matchID
                                            },
                                            {
                                                $pull: {"registeredBy": obj.userID}
                                            },function(err,teaminfo){});
                                        return res.json({
                                            success: false,
                                            msz: "Failed to Register"
                                        });
                                    }
                                    else{
                                        Match.findOneAndUpdate(
                                            {matchID: obj.matchID},
                                            { $inc: {playerCount: 1}},
                                            function(err,mm){
                                            });
                                        return res.json({
                                            success: true,
                                            msz: "Registered Successfully"
                                        });
                                    }
                                });    
                        });
        }
        }},
    getTeam: function(req,res){
        var obj = req.query;
        
        Team.find({
            matchID: obj.matchID
        }, function(err,teams){
            if(err) throw err;
                if(!teams){
                    return res.send({success: false, msz:"No Match Found"});                  
                }
                else{
                    if(teams.length === 0){
                        return res.send({success: false, msz:"No Match Found"});
                    }
                    else{
                        return res.send({success: true, msz: teams}); 
                }}
        });
    },
    postResult: function(req,res){
        var obj = req.body
            rsultinfo = new Result({
                matchID: obj.matchID,
                organzier: obj.organizer,
                game: obj.game,
                matchType: obj.matchType,
                poolPrize: obj.poolPrize,
                teamResult: obj.teamResult
            });
            rsultinfo.save(function(err, result){
                if(err){
                    return res.json({
                        success: false,
                        msz: "Failed to Save",
                        res: obj,
                        errs: err
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
    getResult: function(req,res){
        var obj = req.query;
        Result.find({
            matchID: obj.matchID
        }, function(err,results){
            if(err) throw err;
                if(!results){
                    return res.send({success: false, msz:"No Result Found"});                  
                }
                else{
                    if(results.length === 0){
                        return res.send({success: false, msz:"No Result Found"});
                    }
                    else{
                        return res.send({success: true, msz: results}); 
                }}
        });
},
getUserMatch: function(req,res){
    var obj = req.query;
    Match.find({
        matchID: {$in: obj.matchIDs}
    }, function(err,matches){
        if(err) throw err;
            if(!matches){
                return res.send({success: false, msz:"No Match Found",md: obj.matchIDs});                  
            }
            else{
                if(matches.length === 0){
                    return res.send({success: false, msz:"No Match Found",md: obj.matchIDs});
                }
                else{
                    return res.send({success: true, msz: matches}); 
            }}
    });
},
removeTeam: function(req,res){
    var obj = req.body;
            Match.findOneAndUpdate(  
                {
                    matchID: obj.matchID
                },
                {
                    $pull: {"teams": obj.teamName,
                    "registeredBy": obj.userID},
                },function(err,teaminfo){
                        if(err){
                                return res.send({success: false, msz:"Something Went Wrong"});                  
                        }
                        else{  
                            Team.findOneAndDelete(
                                {
                                    teamID: obj.teamID
                                },
                                function(err,team){
                                    if(err){
                                        Match.findOneAndUpdate(  
                                            {
                                                matchID: obj.matchID
                                            },
                                            {
                                                $push: {"teams": obj.teamName,
                                                "registeredBy": obj.userID},
                                            },function(err,teaminfo){});
                                        return res.json({
                                            success: false,
                                            msz: "Failed to Remove"
                                        });
                                    }
                                    else{
                                        return res.json({
                                            success: true,
                                            msz: "Removed Successfully"
                                        });
                                    }
                                }
                            );
                        }
                });
        
},
closeMatch: function(req,res){
    var obj = req.body;
    Match.findOneAndUpdate({
        matchID: obj.matchID},
        {status: "closed"}
    , function(err,matches){
        if(err){
            return res.send({success: false, msz: err}); 
        }
           else if(!matches){
                return res.send({success: false, msz:"No Match Found"});                  
            }
            else{
                if(matches.length === 0){
                    return res.send({success: false, msz:"No Match Found"});
                }
                else{
                    return res.send({success: true, msz: "Successfully Saved"}); 
            }}
    });
}
    
}

module.exports = functions;