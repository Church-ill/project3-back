'use strict';

var mongoose = require('mongoose');
var Transaction = require('../models/Transaction');
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
  Transaction.find({"_id": req.params.id}).exec()
  .then(function(trans){
    res.json(trans);
  }).catch(function(error){
    next(error);
  });
};

var create = function (req, res, next) {
  // console.log(req.get('Content-Type'));
  // res.json(req.body.user_id);
  Transaction.create({
    "user_id": req.body.user_id,
    "product_id": req.body.product_id,
    "status": req.body.status,
    "qty": req.body.qty
  }).then(function(trans){
    res.json(trans);
  })
  .catch(function(error){
    next(error);
  });
};

var update = function (req, res, next) {
  Transaction.findByIdAndUpdate(req.params.id, { $set: req.body }, { new: true }).exec().then(function(trans) {
    res.json(trans);
  })
  .catch(console.error)
};

module.exports = {
  index,
  show,
  create,
  update
};
