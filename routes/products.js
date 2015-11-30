'use strict';
var express = require('express');
var router = express.Router();
var pCntrl = require('../controllers/product');


router.get('/', pCntrl.index);
router.get('/:id', pCntrl.show);

module.exports = router;
