const Razorpay = require("razorpay");

const razorpay = new Razorpay({
    key_id: 'rzp_test_B2i7vBSvT3WbvT',
    key_secret: 'Nffb2gN7l0Q8ZxwxgE25rOE2'
});

var functions = {
    postAcceptPayment: function(req,res){
        var obj = req.query;
        let options = {
            amount: 500,
            currency: "INR"
        }
        razorpay.orders.create(options, (err,order) => {
            if(err) throw err;
                if(!order){
                    return res.send({success: false, msz: order});                  
                }
                else{
                    if(order.length === 0){
                        return res.send({success: false, msz: order});
                    }
                    else{
                        return res.send({success: true, msz: order}); 
                }}
        });
    },
}

module.exports = functions;