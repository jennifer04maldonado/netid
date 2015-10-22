var express = require('express');
var router = express.Router();
var app = express();

var globalObj;
/* GET ratings page. */

router.get('/', function(req, res, next) {
	res.render('partials/content/profiles/ratings');
});

module.exports = router;