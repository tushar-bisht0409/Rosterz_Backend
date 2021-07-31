var fcm = require('fcm-notification');
var FCM = new fcm("/Users/flash/Desktop/Tushar/rosterz-backend/config/fcm_private_key.json");


var functions = {
    sendNotification: function(req,res){
        var obj = req.body;
        var tokens = obj.tokens;
        var message = {
            data: {
              score: '850',
              time: '2:45'
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
           
          })
    },
}

module.exports = functions;