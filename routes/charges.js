'use strict';
var express = require('express');
var router = express.Router();
var chargeCtrl = require('../controllers/charge');

/* GET home page. */
router.post('/', chargeCtrl);

module.exports = router;
