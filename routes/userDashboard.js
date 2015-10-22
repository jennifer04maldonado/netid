var express = require('express');
var router = express.Router();
var app = express();



/* GET home page. */

router.post('/', function(req, res, next) {
    //select user data hash and create variable for ipfs function
    /*if (req.url === '/dashboard') {
        res.url = '/';
    }*/

   /* var user = req.body.username;
    var hashs = " ";

    if(user == "josh") {
        hashs = "QmWdqGze18JWj5YNtYx9wjN4ZxJ74Vkte2YTtRHKXSne3Z";
    } else if (user == "nathan") {
        //hashs = "QmZTkaNJgi8EoggtzAubT8qPxfhvyqVg5AUMt3ChW3hv7V";
        hashs = "QmRuJT2bfcigw7wQHaiKoDCjJEjVK4JvkxtBgcR4gEuTvB";
    } else if (user == "jenn") {
        hashs = "QmTBZiP1kQCL7eaaM2YncXsELUZUgQZntox2ogLfNWurWM";
    } else if (user == "shawn") {
        hashs = "QmTWZkY5G33wXi2h1UT77gbKkdjsssfQjiQPqapKpPRnAk";
    }
    else {
        res.render('error', { message: "Not Authorized to enter Bizzle" });
    }
    var obj = {};

    //use callback function to wait for ipfs connection before response is sent
    function wait (hashs, callback) {
        var ipfs_api = require('ipfs-api');
        var ipfs = ipfs_api('localhost', '5001');

        //ipfs get file function
        ipfs.cat(hashs, function (err, res) {
            if (err || !res) {
                return console.error(err)
            }

            if (res.readable) {
                // Returned as a stream
                //res.pipe(process.stdout); //comment out as to not use response object on the console
                var string = '';

                //turn the buffer response from ipfs into string then json
                res.setEncoding('utf8');
                res.on('readable', function () {
                    var part = res.read().toString();
                    string += part;
                    var obj = JSON.parse(string);
                    console.log("ipfs");
                    /*res.render('dashboard' , { person: obj });*/
         /*           callback(obj);
                })
            } else {
                // Returned as a string
                //console.log(res) //api ran one server side returns buffer
            }

        })

    }

    wait(hashs, function(obj){
        req.session.json = obj;
        console.log(obj);
        res.render('dashboard', {
             person: obj
        });
    });*/
    console.log("test");
res.render('userDashboard');
});
router.get('/', function(req, res, next) {
    res.render('userDashboard');
});

router.get('/', function(req, res, next) {
    res.render('userDashboard');
});
module.exports = router;