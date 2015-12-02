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
  }else{
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

// var search = function (req, res, next) {
//   console.log("made it to search controller");
//   Product.find({"name": req.params.id}).exec().then(function (products) {
//     res.json(products);
//   }).catch(function(error){
//     next(error);
//   });
// };

var create = function (req, res, next) {

};

module.exports = {
  index,
  show
};
