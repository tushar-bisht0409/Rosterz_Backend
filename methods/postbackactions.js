
const Cpalead = require("../models/cpalead");
const OfferDaddy = require("../models/offerdaddy");
const Wannads = require("../models/wannads");
const mongoose = require("mongoose");

var functions = {
    cpaLead: function(req,res){
        var obj = req.query;
        var postback = new Cpalead({
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
        postback.save(function(err, postbackInfo){
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
    },
    offerDaddy: function(req,res){
        var obj = req.query;
        var postback = new OfferDaddy({
            offer_id: obj.offer_id,
            payout: obj.payout,
            amount: obj.amount,
            user_id: obj.user_id,
            offer_name: obj.offer_name,
            subid: obj.subid,
            subid2: obj.subid2,
            subid3: obj.subid3,
            virtual_currency: obj.virtual_currency,
            timeStamp: Date.now().toString
        });
        postback.save(function(err, postbackInfo){
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
    },
    wannads: function(req,res){
        var obj = req.query;
        var postback = new Wannads({
            campaign_id: obj.campaign_id,
            payout: obj.payout,
            campaign_name: obj.campaign_name,
            subid: obj.subid,
            subid2: obj.subid2,
            uuid: obj.subid3,
            reward: obj.reward,
            status: obj.status,
            virtual_currency: obj.virtual_currency,
            timeStamp: Date.now().toString
        });
        postback.save(function(err, postbackInfo){
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
    },
}



module.exports = functions;