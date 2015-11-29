'use strict';

var mongoose = require('mongoose');
mongoose.Promise = Promise;

mongoose.model('User', require('./User'));

mongoose.connect("mongodb://localhost/proj3");

module.exports = mongoose;
