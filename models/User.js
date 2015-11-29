'use strict';

var bcrypt = require('bcrypt'); // Crypts password
var uniqueValidator = require('mongoose-unique-validator'); // We don't want duplicate usernames
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
// export a mongoose model

var userSchema = new Schema({
  userName : {
    type : String,
    unique : true,
    required : true
  },
  passwordDigest : String
});

userSchema.plugin(uniqueValidator); // get the unique functionality

userSchema.methods.comparePassword = function(password) {
  var self = this;
  // compares the digested password and not the actual password
  return new Promise(function(res, rej) {
    bcrypt.compare(password, self.passwordDigest, function(err, match) {
      if(err) {
        rej(err);
        return;
      }

      res(match);
    });
  });
};

userSchema.methods.setPassword = function(password) {
  var self = this;  // 'this' points to

  // create a new promise and assign it to 'saltPromise'
  var saltPromise = new Promise(function saltExec(res, rej) {  // resolves or rejects
    // call 'bcrypt.genSalt' method
    // to generate 16-byte salt for use in computing digest
    bcrypt.genSalt(16, function(err, salt) {
      if(err) {
        rej(err);
        return;
      }

      res(salt);
    });
  });

  var returnedPromise = saltPromise.then(function(salt) {
    return new Promise(function hashExec(res, rej) {
      bcrypt.hash(password, salt, function(err, digest) {
        if(err) {
          rej(err);
          return;
        }

        res(digest);
      });
    });
  }).then(function(digest) {
    self.passwordDigest = digest;
    return self.save();
  });

  return returnedPromise;
};

module.exports = userSchema;
