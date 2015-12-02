'use strict';

var mongoose = require('mongoose');
var Transaction = require('../models/Transaction');
var Product = require('../models/Product');
mongoose.Promise = global.Promise;
module.exports = mongoose.connection;

var index = function (req, res, next) {
  Transaction.find({}).exec().then(function (trans) {
    res.json(trans);
  }).catch(function(error){
    next(error);
  });
};

var show = function (req, res, next) {
  Transaction.find({"user_id": req.user.id, "status": "cart"}).exec()
  .then(function(trans){
    res.json({trans});
  }).catch(function(error){
    next(error);
  });
};

var create = function (req, res, next) {
  // res.json(req.body.user_id);
  //take prod id. Get prod name/desc/price.
  var prod = {
    name: "",
    desc: "",
    price: 0
  };

  Product.find({"_id": req.body.product_id}).exec()
  .then(function(product){
    prod.name = product[0].name;
    prod.desc = product[0].desc;
    prod.price = product[0].price;
  }).then(function(){
      Transaction.create({
      "user_id": req.user.id,
      "product_id": req.body.product_id,
      "status": req.body.status,
      "qty": req.body.qty,
      "product_name": prod.name,
      "product_desc": prod.desc,
      "product_price": prod.price
    });
    })
  .then(function(){
    Transaction.find(
      {"user_id": req.user.id,
       "status": 'cart'
      }).exec()
  .then(function(trans){
    console.log(trans);
    res.json({trans});
  }).catch(function(error){
    next(error);
  });
  });
};

var update = function (req, res, next) {
  Transaction.findByIdAndUpdate(req.params.id, { $set: req.body }, { new: true }).exec().then(function(trans) {
    res.json(trans);
  })
  .catch(console.error);
};

var destroy = function (req, res, next) {
  Transaction.findByIdAndRemove(req.params.id).exec()
  .then(function() {
    res.json('Succesfully Deleted');
  })
  .catch(function(error) {
    next(error);
  });
};


module.exports = {
  index,
  show,
  create,
  update,
  destroy
};
