
const express = require("express");
const actions = require("../methods/actions");
const matchactions =  require("../methods/matchactions");
const router = express.Router();

// POST / Adding New User
router.post('/adduser', actions.addNew);

// POST / Authenticating User
router.post('/authenticate', actions.authenticate); 

//POST / Host Match
router.post('/hostmatch', matchactions.postMatch);

//POST / Register Team
router.post('/registerteam', matchactions.postTeam);

//POST / Post Result
router.post('/postresult', matchactions.postResult);

//GET / Get Result
router.get('/getresult', matchactions.getResult);

//GET / Get Matches
router.get('/getmatch', matchactions.getMatch);

//GET / Get Teams
router.get('/getteam', matchactions.getTeam);


module.exports = router;