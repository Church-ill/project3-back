'use strict';

var mongoose = require('mongoose');
var Product = require('../models/Product');
mongoose.Promise = global.Promise;
module.exports = mongoose.connection;

var index = function (req, res, next) {
  Product.find({}).exec().then(function (products) {
    res.json(products);
  }).catch(function(error){
    next(error);
  });
};

var show = function (req, res, next) {
  Product.find({"_id": req.params.id}).exec()
  .then(function(product){
    res.json(product);
  }).catch(function(error){
    next(error);
  });
};

var create = function (req, res, next) {

};

module.exports = {
  index,
  show
};
