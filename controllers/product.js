'use strict';

var mongoose = require('mongoose');
var Product = require('../models/Product');
mongoose.Promise = global.Promise;
module.exports = mongoose.connection;

var index = function (req, res, next) {
  if (req.query.q){
    Product.find({"name": { "$regex": req.query.q, "$options": "i" }}).exec().then(function (products) {
      res.json(products);
    }).catch(function(error){
      next(error);
    });
  }
  else if (req.query.c){
    Product.find({}).where('clicks').gt(0).sort('-clicks').exec().then(function (products) {
      res.json(products);
    }).catch(function(error){
      next(error);
    });
  }
  else {
    Product.find({}).exec().then(function (products) {
      res.json(products);
    }).catch(function(error){
      next(error);
    });
  }
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

var update = function (req, res, next) {
  if (req.query.click) {
    Product.findByIdAndUpdate(req.params.id, { $inc: {clicks: 1} }, { new: true }).exec().then(function(trans) {
      res.json(trans.clicks);
    })
    .catch(console.error);
  }
};

module.exports = {
  index,
  show,
  create,
  update
};
