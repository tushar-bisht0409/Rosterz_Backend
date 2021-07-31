const User = require("../models/user");
const jwt = require("jwt-simple");
const config = require("../config/dbconfig");

var functions = {
    addNew: function(req,res) {
        if((!req.body.phone) || (!req.body.password)){
            res.json({
                success: false,
                msz: "Enter all fields"
            });
        }
        else{
            var newUser = User({
                phone: req.body.phone,
                password: req.body.password
            });
            User.findOne({
                phone: req.body.phone
            },function(err, user){
                if(err) throw err;
                if(!user){
                    newUser.save(function(err, newUser){
                        if(err){
                            res.json({
                                success: false,
                                msz: "Failed to Save"
                            });
                        }
                        else{
                            res.json({
                                success: true,
                                msz: "Successfully Saved",
                            });
                        }
                    });                    
                }
                else{
                    res.json({success: false, msz:"User Already Exist,Try to Login"});
                }
            });

            
        }
    },
    authenticate: function(req,res){
        User.findOne({
            phone: req.body.phone
        },function(err, user){
            if(err) throw err;
            if(!user){
                res.send({success: false, msz:"Authentication Failed,User Not Found"});
            }
            else{
                user.comparePassword(req.body.password, function(err, isMatch){
                    if(isMatch && !err){
                        var token = jwt.encode(user, config.secret);
                        res.json({
                            success: true,
                            token: token,
                            userID: user._id
                        });     
                    }
                    else{
                        return res.send({
                            success: false,
                            msz:"Authentication Failed,Wrong Password"
                        });
                    }
                });
            }
        });
    },
};

module.exports = functions;