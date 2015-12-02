var express = require('express');
var router = express.Router();
var authCtrl = require('../controllers/auth');
/* GET users listing. */
router.get('/', authCtrl.root.get);

module.exports = router;
