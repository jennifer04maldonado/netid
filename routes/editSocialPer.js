var express = require('express');
var router = express.Router();
var hash = "dfhsdh";
var obj = {};

router.post('/', function (req, res, next) {

    var name = req.body.nameEdit;
    var description = req.body.descriptionEdit;
    var addObj = req.session.json;

    console.log(addObj.profile[0].socialPersonas.name);
    console.log(addObj.profile[0].socialPersonas.description);
    addObj.profile[0].socialPersonas.name = name;
    addObj.profile[0].socialPersonas.description = description;
    console.log(addObj.profile[0].socialPersonas.name);
    console.log(addObj.profile[0].socialPersonas.description);


    function wait(callback) {
        console.log("1st");
        var ipfs_api = require('ipfs-api');
        var ipfs = ipfs_api('localhost', '5001');
        var string = JSON.stringify(addObj);
        //var test2 = 'hello2'

        //ipfs add file function
        function wait2(callback) {
            console.log('2nd');
            ipfs.add(new Buffer(string), function (err, res) {
                console.log('3rd');
                if (err || !res) return console.error(err)

                for (var i = 0; i < res.length; i++) {
                    console.log(res[i]);
                    hash = res[i].Hash;
                    console.log(hash);
                    callback();
                }
            });

        }

        wait2(function() {

            console.log('4th');

            ipfs.cat(hash, function (err, res) {
                console.log('5th');
                console.log(hash);
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
                        obj = JSON.parse(string);
                        console.log(string);
                        callback();
                    })
                } else {
                    // Returned as a string
                    //console.log(res) //api ran one server side returns buffer
                }

            });
        });
    }

    wait(function () {
        console.log(hash);
        req.session.hash = hash;
        res.render('dashboard', {person: obj, hash: req.session.hash});

    });

});

module.exports = router;