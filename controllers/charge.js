'use strict';
// Set your secret key: remember to change this to your live secret key in production
// See your keys here https://dashboard.stripe.com/account/apikeys
var stripe = require("stripe")(process.env.STRIPE_SECRET);

// (Assuming you're using express - expressjs.com)
// Get the credit card details submitted by the form
var charge = function (req, res, next) {
  console.log('REQUEST STRIPE');
  console.log(req.body.amount);
  console.log(req.body.token);
  // var stripeToken = req.body.token;
  stripe.charges.create({
    amount: req.body.amount*100, // amount in cents, again
    currency: "usd",
    source: req.body.token,
    description: "Example charge"
  },
    function(err, charge) {
      if (err && err.type === 'StripeCardError') {
      // The card has been declined
      }
      else {
        res.sendStatus(200);
      }
    });
  // ).exec().then(function(){
  //   res.sendStatus(200);
  // }).catch(function(error) {
  //   next(error)
  // })
};

module.exports = charge;
