var express = require('express');
var app = express;
var router = express.Router();

var globalObj;

router.get('/', function(req, res, next) {
    res.render('trusted_source_home');
});

module.exports = router;