'use strict';

var Product = require('../models/Product');

var db = require('../lib/db');

var index = function (req, res, next) {
  Product.find().exec().then(function (products) {
    db.close();
  }).catch(function(error){
    next(error)});
};

var show = function (req, res, next) {

};

var create = function (req, res, next) {

};

module.exports = {
  index
};
