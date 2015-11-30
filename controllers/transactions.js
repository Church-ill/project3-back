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

};

var update = function (req, res, next) {

};

module.exports = {
  index,
  show,
  create,
  update
};
