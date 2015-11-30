'use strict';

var mongoose = require('mongoose');

var productSchema = new mongoose.Schema({

  name: {
         type: String,
         required: true
        },

  desc: String,

  price: {
          type: Number,
          required: true
         },

  number: {
           type: Number,
           required: true
          }
});

// Model
var Product = mongoose.model( 'Product', productSchema);

module.exports = Product;

