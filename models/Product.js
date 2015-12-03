'use strict';

var mongoose = require('mongoose');

var productSchema = new mongoose.Schema({

  name: {
         type: String,
         required: true
        },

  desc: String,

  size: {
          type: String,
          required: true
         },

  price: {
           type: Number,
           required: true
          },

  number: Number,

  clicks: {
           type: Number,
           default: 0
          },

  url: String

});

// Model
var Product = mongoose.model( 'Product', productSchema);

module.exports = Product;

