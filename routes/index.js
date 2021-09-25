
const express = require("express");
const actions = require("../methods/actions");
const matchactions =  require("../methods/matchactions");
const feedbackactions = require("../methods/feedbackactions");
//const payactions = require("../methods/payactions");
const userinfoactions = require("../methods/userinfoactions");
const notificationactions = require("../methods/notificationactions");
const coinactions = require("../methods/coinactions");
const teamactions = require("../methods/teamactions");
const tournamentactions = require("../methods/tournamentactions");
const resultactions = require("../methods/resultactions");
const postbackactions = require("../methods/postbackactions");
const router = express.Router();

// POST / Adding New User
router.post('/adduser', actions.addNew);

// POST / Authenticating User
router.post('/authenticate', actions.authenticate); 

//POST / Post User Information
router.post('/saveuser', userinfoactions.postUserInfo);

// POST / Update User Info
router.post('/updateinfo', userinfoactions.updateUserInfo);

//POST / Update Player Statistics
router.post('/updateplayerstats', userinfoactions.updateMatchStats);

//POST / Host Match
router.post('/hostmatch', matchactions.postMatch);

//POST / Create Tournament
router.post('/createtournament', tournamentactions.createTorunament);

//POST / Register Team for Tournament
router.post('/registertournament', tournamentactions.teamAction);

//POST / Create Rounds for Tournament
router.post('/createtournamentround', tournamentactions.createRound);

//POST / Create Round's Result for Tournament
router.post('/createtournamentroundresult', resultactions.createRoundResult);

//POST / Create Round's Group Result for Tournament
router.post('/createtournamentgroupresult', resultactions.createGroupResult);

//POST / Register Team
// router.post('/registerteam', matchactions.postTeam);  //OLD 

//POST / Team Actions
router.post('/teamactions', teamactions.teamActions);

//POST / Update Team Statistics
router.post('/updateteamstats', teamactions.updateStats);

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

//POST /Subscribing User
router.post('/subscription63981710120409', userinfoactions.subscription);

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
// router.get('/getteam', matchactions.getTeam);  //OLD

//GET / Get Teams
router.get('/getteam', teamactions.getTeam);

//GET / Get Tournaments
router.get('/gettournament', tournamentactions.getTournament);

//GET / Get CPA Lead Postback
router.get('/postback/cpalead', postbackactions.cpaLead);

//GET / Get Offer Daddy Postback
router.get('/postback/offerdaddy', postbackactions.offerDaddy);

//GET / Get TapJoy Postback
router.get('/callback/tapjoy', postbackactions.tapjoy);

//GET / Get Affiliate Interactive Postback
router.get('/postback/affinteractive', postbackactions.affinteractive);

//GET / Get Affiliate Interactive Postback
router.get('/postback/adgatemedia', postbackactions.adgatemedia);



module.exports = router;