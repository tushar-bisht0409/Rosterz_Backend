const Tournament = require('../models/tournament');
const Round = require('../models/round');
const mongoose = require("mongoose");
const {v1: uuidv1} = require("uuid");

var functions = {
    createTorunament: function(req,res){
        var obj = req.body;
        tourInfo = new Tournament({
            tournamentID: uuidv1(),
            organizer: obj.organizer,
            userID: obj.userID,
            description: obj.description,
            maxPlayers: obj.maxPlayers,
            totalSlots: obj.totalSlots,
            startDate: obj.startDate,
            endDate: obj.endDate,
            game: obj.game,
            logoID: obj.logoID,
            tournamentLink: obj.tournamentLink,
            entryFee: obj.entryFee,
            prize: obj.prize,
        });
        tourInfo.save(function(err, tournament){
            if(err){
                return res.json({
                    success: false,
                    msz: "Failed to Save"
                });
            }
            else{
                return res.json({
                    success: true,
                    msz: "Successfully Saved",
                    tour: tournament
                });
            }
        });
    },
    getTournament: function(req,res){
        var obj = req.query;
        if(obj.getBy === "game"){
        Tournament.find({
            game: obj.game
        }, function(err,tours){
            if(err) throw err;
                if(!tours){
                    return res.send({success: false, msz:"No Tournament Found"});                  
                }
                else{
                    if(tours.length === 0){
                        return res.send({success: false, msz:"No Tournament Found"});
                    }
                    else{
                        return res.send({success: true, msz: tours}); 
                }}
        });
    }
    else if(obj.getBy === "tournamentID"){
        Tournament.find({
            tournamentID: obj.tournamentID
        }, function(err,tours){
            if(err) throw err;
                if(!tours){
                    return res.send({success: false, msz:"No Tournament Found"});                  
                }
                else{
                    if(tours.length === 0){
                        return res.send({success: false, msz:"No Tournament Found"});
                    }
                    else{
                        return res.send({success: true, msz: tours}); 
                }}
        });
    }
    else if(obj.getBy === "organizer"){
        Tournament.find({
            organizer: obj.organizer
        }, function(err,tours){
            if(err) throw err;
                if(!tours){
                    return res.send({success: false, msz:"No Tournament Found"});                  
                }
                else{
                    if(tours.length === 0){
                        return res.send({success: false, msz:"No Tournament Found"});
                    }
                    else{
                        return res.send({success: true, msz: tours}); 
                }}
        });
    }
    else if(obj.getBy === "userID"){
        Tournament.find({
            userIDs: obj.userID
        }, function(err,tours){
            if(err) throw err;
                if(!tours){
                    return res.send({success: false, msz:"No Tournament Found"});                  
                }
                else{
                    if(tours.length === 0){
                        return res.send({success: false, msz:"No Tournament Found"});
                    }
                    else{
                        return res.send({success: true, msz: tours}); 
                }}
        });
    }
    },
    teamAction: function(req,res){
        var obj = req.body;
        if(obj.type === "create"){
            Tournament.findOneAndUpdate(
                {
                    tournamentID: obj.tournamentID
                },
                {
                    $push: {
                        "teams": obj.team,
                        "teamIDs": obj.teamID,
                        "userIDs": obj.userID,
                    }
                },
                function(err,tinfo){
        if(err) {
            return res.json({
                success: false,
                msz: "Failed to Save"
            });
        }
        else {
            return res.json({
                success: true,
                msz: "Successfully Saved"
            });
        }
    });
}
else if(obj.type === "join"){
    Tournament.findOneAndUpdate(
        {
            tournamentID: obj.tournamentID
        },
        {
            $push: {
                "userIDs": obj.userID,
            }
        },
        function(err,tinfo){
if(err) {
    return res.json({
        success: false,
        msz: "Failed to Save"
    });
}
else {
    return res.json({
        success: true,
        msz: "Successfully Saved"
    });
}
});
}
else if(obj.type === "remove"){
    Tournament.findOneAndUpdate(
        {
            tournamentID: obj.tournamentID
        },
        {
            $pull: {
                "teams": obj.team,
                "teamIDs": obj.teamID,
                "userIDs": obj.userID,
            }
        },
        function(err,tinfo){
if(err) {
    return res.json({
        success: false,
        msz: "Failed to Save"
    });
}
else {
    return res.json({
        success: true,
        msz: "Successfully Saved"
    });
}
});
}
},
createRound: function(req,res){
    var obj = req.body;
    roundInfo = new Round({
        roundName: obj.roundName,
        tournamentID: obj.tournamentID,
        allGroups: obj.allGroups,
        groupTeams: obj.groupTeams,
        game: obj.game
    });
    roundInfo.save(function(err, round){
        if(err){
            return res.json({
                success: false,
                msz: "Failed to Save"
            });
        }
        else{
            return res.json({
                success: true,
                msz: "Successfully Saved",
                tour: round
            });
        }
    });
},
getRound: function(req,res){
    var obj = req.query;
    Round.find({
        tournamentID: obj.tournamentID,
        roundName: obj.roundName, 
    }, function(err,rounds){
        if(err) throw err;
            if(!rounds){
                return res.send({success: false, msz:"No Tournament Rounds Found"});                  
            }
            else{
                if(rounds.length === 0){
                    return res.send({success: false, msz:"No Tournament Rounds Found"});
                }
                else{
                    return res.send({success: true, msz: rounds}); 
            }}
    });
}
}

module.exports = functions;