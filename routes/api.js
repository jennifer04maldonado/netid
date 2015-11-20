var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Post = require('./../models/models.js');
Post = mongoose.model('Post');

router.use(function (req, res, next) {

    if (req.method === "GET") {
        //continue to the next middleware
        return next();
    }

    if (!req.isAuthenticated()) {
        //user not authed redirect to login page
        return res.redirect('/#login');
    }

    //user authenticated

    return next();

});

router.route('/posts')

    .get(function (req, res) {

        console.log('debug1');
        Post.find(function (err, posts) {
            console.log('debug2');
            if (err) {
                return res.status(500).send(err);
            }
            return res.status(200).send(posts);
        });

    })

    .post(function (req, res) {

        var post = new Post();
        post.text = req.body.text;
        post.created_by = req.body.created_by;
        post.save(function (err, post) {
            if (err) {
                return res.status(500).send(err);
            }
            return res.json(post);
        });

    });

//infinite routes based on id
router.route('/posts/:id')

    //get data
    .get(function (req, res) {
        Post.findById(req.params.id, function (err, post) {
            if (err)
                res.send(err);
            res.json(post);
        });
    })

    //modifies or updates post
    .put(function(req, res){
        Post.findById(req.params.id, function(err, post){
            if(err)
                res.send(err);

            post.created_by = req.body.created_by;
            post.text = req.body.text;

            post.save(function(err, post){
                if(err)
                    res.send(err);

                res.json(post);
            });
        });
    })

    //modifies or updates post
    .delete(function(req, res) {
        Post.remove({
            _id: req.params.id
        }, function(err) {
            if (err)
                res.send(err);
            res.json("deleted :(");
        });
    });

/*
router.route('/api/dashboard')

    .get(function(req, res) {
        Dashboard.findById(req.params.id, function(err, ))
    });
*/

module.exports = router;