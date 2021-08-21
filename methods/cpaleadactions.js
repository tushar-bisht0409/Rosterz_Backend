
const Cpalead = require("../models/cpalead");
const mongoose = require("mongoose");

var functions = {
    updateLead: function(req,res){
        var obj = req.query;
        var lead = new Cpalead({
            campaign_id: obj.campaign_id,
            payout: obj.payout,
            campaign_name: obj.campaign_name,
            subid: obj.subid,
            subid2: obj.subid2,
            subid3: obj.subid3,
            ip_address: obj.ip_address,
            gateway_id: obj.gateway_id,
            lead_id: obj.lead_id,
            country_iso: obj.country_iso,
            password: obj.password,
            virtual_currency: obj.virtual_currency,
            timeStamp: Date.now().toString
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