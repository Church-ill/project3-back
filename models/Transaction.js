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
           required: true
          },

  qty: {
        type: Number,
        required: true
        },

  date: Date

});

// Model
var Transaction = mongoose.model( 'Transaction', transactionSchema);

module.exports = Transaction;
