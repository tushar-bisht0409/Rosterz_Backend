const RoundResult = require('../models/roundresult');
const GroupResult = require('../models/groupresult');

var functions = {
    createRoundResult: function(req,res){
    var obj = req.body;
    roundResInfo = new RoundResult({
        roundName: obj.roundName,
        tournamentID: obj.tournamentID,
        teamsQualified: obj.teamsQualified,
        game: obj.game
    });
    roundResInfo.save(function(err, roundRes){
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
                tour: roundRes
            });
        }
    });
},
getRoundResult: function(req,res){
    var obj = req.query;
    RoundResult.find({
        tournamentID: obj.tournamentID,
        roundName: obj.roundName, 
    }, function(err,roundRes){
        if(err) throw err;
            if(!roundRes){
                return res.send({success: false, msz:"No Tournament Round's Result Found"});                  
            }
            else{
                if(roundRes.length === 0){
                    return res.send({success: false, msz:"No Tournament Round's Result Found"});
                }
                else{
                    return res.send({success: true, msz: roundRes}); 
            }}
    });
},
createGroupResult: function(req,res){
    var obj = req.body;
    groupResInfo = new GroupResult({
        groupName: obj.groupName,
        roundName: obj.roundName,
        tournamentID: obj.tournamentID,
        teamResult: obj.teamResult,
        game: obj.game
    });
    groupResInfo.save(function(err, groupRes){
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
                tour: groupRes
            });
        }
    });
},
getGroupResult: function(req,res){
    var obj = req.query;
    GroupResult.find({
        tournamentID: obj.tournamentID,
        roundName: obj.roundName, 
        groupName: obj.groupName, 
    }, function(err,groupRes){
        if(err) throw err;
            if(!groupRes){
                return res.send({success: false, msz:"No Group's Result Found"});                  
            }
            else{
                if(groupRes.length === 0){
                    return res.send({success: false, msz:"No Group's Result Found"});
                }
                else{
                    return res.send({success: true, msz: groupRes}); 
            }}
    });
},
}

module.exports = functions;