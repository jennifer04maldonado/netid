var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
    res.render('twitter', { title: 'MEAN Stack Twitter' });
});

module.exports = router;