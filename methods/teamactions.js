const Team = require("../models/team");
const TeamStatistics = require("../models/teamstatistics");
const mongoose = require("mongoose");
const {v1: uuidv1} = require("uuid");

var functions = {
    teamActions: function(req,res){
        var obj = req.body;
        var tid = uuidv1();
        if(obj.type == "create"){
            teaminfo = new Team({
                teamID: tid,
                teamName: obj.teamName,
                playersID: [obj.userID],
                playerName: [obj.playerName],
                game: obj.game,
            });
            statsinfo = new TeamStatistics({
                teamID: tid,
            });
            teaminfo.save(function(err, tinfo){
                if(err){
                    return res.json({
                        success: false,
                        msz: "Failed to Save"
                    });
                }
                else{
                    statsinfo.save(function(err, sinfo){
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
            });
        }
        else if(obj.type == "join"){
            Team.findOneAndUpdate(
                {
                    teamID: obj.teamID
                },
                {
                    $push: {"playersID": obj.userID,
                "playersName": obj.playerName}
                },
                function(err,tinfo){
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
                }
            );
        }
        else if(obj.type == "quit"){
            Team.findOneAndUpdate(
                {
                    teamID: obj.teamID
                },
                {
                    $pull: {"playersID": obj.userID,
                    "playersName": obj.playerName}
                },
                function(err,tinfo){
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
                }
            );
        }
        else if(obj.type == "remove"){
            Team.findOneAndUpdate(
                {
                    teamID: obj.teamID
                },
                {
                    $pull: {"playersID": obj.removeID,
                    "playersName": obj.playerName}
                },
                function(err,tinfo){
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
                }
            );
        }
    },
    getTeam: function(req,res){
        var obj = req.query;
    Team.find({
        playersID: obj.userID,
        game: obj.game
    }, function(err,tinfo){
        if(err){
            return res.send({success: false, msz:"No Team Found"});                  
        }
        else if(!tinfo){
                return res.send({success: false, msz:"No Team Found"});                  
            }
            else{
                if(tinfo.length === 0){
                    return res.send({success: false, msz:"No Team Found"});
                }
                else{
                    return res.send({success: true, msz: tinfo}); 
            }
        }
    });
    },
    updateStats: function(req,res){
        var obj = req.body;
    TeamStatistics.findOneAndUpdate({
        teamID: obj.teamID
    },
    {
        $push: {"matchResult": obj.statistics}
    },
    function(err,tinfo){
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
getTeamStatistics: function(req,res){
    var obj = req.query;
    TeamStatistics.find({
        teamID: obj.teamID
}, function(err,tstats){
    if(err){
        return res.send({success: false, msz:"No Team Found"});                  
    }
    else if(!tstats){
            return res.send({success: false, msz:"No Team Found"});                  
        }
        else{
            if(tstats.length === 0){
                return res.send({success: false, msz:"No Team Found"});
            }
            else{
                return res.send({success: true, msz: tstats}); 
        }
    }
});
},
}

module.exports = functions;