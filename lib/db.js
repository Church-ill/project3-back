'use strict';

var mongoose = require('mongoose');

mongoose.Promise = global.Promise;

mongoose.connect('mongodb://localhost/proj3');

module.exports = mongoose.connection;
