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

  clicks: Number,

  url: String

});

// Model
var Product = mongoose.model( 'Product', productSchema);

module.exports = Product;

