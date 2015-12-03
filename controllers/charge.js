'use strict';
// Set your secret key: remember to change this to your live secret key in production
// See your keys here https://dashboard.stripe.com/account/apikeys
var stripe = require("stripe")(process.env.STRIPE_SECRET);

// (Assuming you're using express - expressjs.com)
// Get the credit card details submitted by the form
var charge = function (req, res, next) {
  var stripeToken = req.body.stripeToken;
  stripe.charges.create({
    amount: 1000, // amount in cents, again
    currency: "usd",
    source: stripeToken,
    description: "Example charge"
  }, function(err, charge) {
      if (err && err.type === 'StripeCardError') {
      // The card has been declined
      }
    }
  // }).then(function(){
  //   res.sendStatus(200);
  // }).catch(function(error) {
  //   next(error)
  // })
  )
};

module.exports = charge;
