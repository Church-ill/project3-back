'use strict';
var express = require('express');
var router = express.Router();
var tCntrl = require('../controllers/transactions');


router.get('/', tCntrl.index);
router.get('/:id', tCntrl.show);
router.post('/', tCntrl.create);
router.patch('/:id', tCntrl.update);

module.exports = router;
