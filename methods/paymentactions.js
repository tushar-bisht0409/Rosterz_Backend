const Payment = require("../models/Payment");
const mongoose = require("mongoose");

var functions = {
    savePayment: function(req,res){
        var obj = req.body
            paymentinfo = new Payment({
                userID: obj.userID,
                method: obj.method,
                amount: obj.amount,
                status: obj.status,
            });
            paymentinfo.save(function(err, payment){
                if(err){
                    return res.json({
                        success: false,
                        msz: "Failed to Sent"
                    });
                }
                else{
                    return res.json({
                        success: true,
                        msz: "Successfully Sent"
                    });
                }
            });
        
    }
}

module.exports = functions;