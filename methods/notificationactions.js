const Notification = require("../models/notification");
var fcm = require('fcm-notification');
var FCM = new fcm("fcm_private_key.json");


var functions = {
    sendNotification: function(req,res){
        var obj = req.body;
        var tokens = obj.tokens;
        notiinfo = new Notification({
          matchID: obj.matchID,
          organizer: obj.organizer,
          game: obj.game,
          title: obj.title,
          body: obj.body,
          timeStamp: obj.timeStamp
      });
      notiinfo.save(function(err, noti){
        if(err){
            return res.json({
                success: false,
                msz: "Failed to Save"
            });
        }
        else{
          var message = {
            data: {
            },
            notification:{
              title : obj.title,
              body : obj.body
            }
          };
          FCM.sendToMultipleToken(message, tokens, function(err, response) {
              if(err){
                return res.send({success: false, msz:"UnSuccessful"});
              }else {
                return res.send({success: true, msz:"Notification Sent"});
              }
           
          });
        }
    });
        
    },
    getNotification: function(req,res){
      var obj = req.query;
        Notification.find({
            matchID: {$in: obj.matchIDs}
        }, function(err,notifications){
            if(err) throw err;
                if(!notifications){
                    return res.send({success: false, msz:"No Notification Found"});                  
                }
                else{
                    if(notifications.length === 0){
                        return res.send({success: false, msz:"No Notification Found"});
                    }
                    else{
                        return res.send({success: true, msz: notifications}); 
                }}
        }).sort({"timeStamp": -1});
    },
    
}

module.exports = functions;