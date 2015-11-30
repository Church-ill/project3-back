'use strict';

var mongoose = require('mongoose');

var transactionSchema = new mongoose.Schema({

  user_id: {
         type: String,
         required: true
        },

  product_id: {
          type: String,
          required: true
         },

  status: {
           type: String,
           required: true,
           enum: { values: ['viewed', 'cart', 'checkout', 'purchased'] }
          },

  qty: {
        type: Number,
        required: true
        },
},
  { timestamps: true,
    toObject: { virtuals: true}, //methods on document
    toJSON: {virtuals: true}
  }
);

// Model
var Transaction = mongoose.model( 'Transaction', transactionSchema);

module.exports = Transaction;
