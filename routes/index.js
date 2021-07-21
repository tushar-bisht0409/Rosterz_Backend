
const express = require("express");
const actions = require("../methods/actions");
const router = express.Router();

// POST / Adding New User
router.post('/adduser', actions.addNew);

// POST / Authenticating User
router.post('/authenticate', actions.authenticate); 


module.exports = router;