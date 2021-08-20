
const Cpalead = require("../models/cpalead");
const mongoose = require("mongoose");

var functions = {
    updateLead: function(req,res){
        var obj = req.query;
        var lead = new Cpalead({
            GAID: obj.gaid,
            payout: obj.payout,
            campaignID: obj.campaignID,
        });
        lead.save(function(err, leadInfo){
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
}

module.exports = functions;