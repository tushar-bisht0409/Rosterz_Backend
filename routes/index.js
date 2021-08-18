
const express = require("express");
const actions = require("../methods/actions");
const matchactions =  require("../methods/matchactions");
const feedbackactions = require("../methods/feedbackactions")
//const payactions = require("../methods/payactions");
const userinfoactions = require("../methods/userinfoactions");
const notificationactions = require("../methods/notificationactions");
const coinactions = require("../methods/coinactions");
const router = express.Router();

// POST / Adding New User
router.post('/adduser', actions.addNew);

// POST / Authenticating User
router.post('/authenticate', actions.authenticate); 

//POST / Post User Information
router.post('/saveuser', userinfoactions.postUserInfo);

// POST / Update User Info
router.post('/updateinfo', userinfoactions.updateUserInfo);

//POST / Host Match
router.post('/hostmatch', matchactions.postMatch);

//POST / Register Team
router.post('/registerteam', matchactions.postTeam);

//POST / Post Result
router.post('/postresult', matchactions.postResult);

//POST / Close Match
router.post('/closematch', matchactions.closeMatch);

//POST /Send Notification
router.post('/sendnotification',notificationactions.sendNotification);

//POST /Send FeedBack
router.post('/sendfeedback',feedbackactions.sendFeedback);

//POST /Updating user match information
router.post('/usermatch', userinfoactions.joinhost);

//POST /Updating User FCM token
router.post('/updatefcmtoken',userinfoactions.updateFcmToken);

//POST /Remove Team from Match
router.post('/removeteam',matchactions.removeTeam);

//POST /Remove User Match
router.post('/removeusermatch',userinfoactions.removejoinhost);

//POST /Update User Coins
router.post('/updatecoins', coinactions.updateCoins);

//GET / Getting User Information
router.get('/getuser', userinfoactions.getUserInfo);

//GET / Getting Fcm Token List
router.get('/fcmtokenlist', userinfoactions.getFcmTokenList);

// //GET / Getting User Payment
// router.get('/payus', payactions.postAcceptPayment);

//GET / Get Result
router.get('/getresult', matchactions.getResult);

//GET / Get Result
router.get('/getnotification', notificationactions.getNotification);

//GET / Get User Matches
router.get('/getusermatch', matchactions.getUserMatch);

//GET / Get Matches
router.get('/getmatch', matchactions.getMatch);

//GET / Get Teams
router.get('/getteam', matchactions.getTeam);


module.exports = router;