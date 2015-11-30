var express = require('express');
var router = express.Router();
var pCntrl = require('../controllers/product');
/* GET products listing. */
// router.get('/', function(req, res, next) {
//   res.json('Product');
// );
router.get('/', pCntrl.index);
router.get('/:id', pCntrl.show);

module.exports = router;
