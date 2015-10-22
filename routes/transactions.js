var express = require('express');
var app = express;
var router = express.Router();

var globalObj;

router.get('/', function (req, res, next) {
        res.render('partials/content/profiles/transactions');
});

module.exports = router;