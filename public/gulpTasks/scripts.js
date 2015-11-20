var gulp = require('gulp');
// var less = require('gulp-less');
var gutil = require('gulp-util');
var path = require('path');
var plumber = require('gulp-plumber');
var livereload = require('gulp-livereload');
var source = require('vinyl-source-stream');
var browserify = require('browserify');
var babelify = require('babelify');
var watchify = require('watchify');
var notifier = require('node-notifier');

gulp.task('dashboardApp', function(){
	var bundler = watchify(browserify({
		entries: ['javascripts/jsx/userDashboard/dashboardApp.jsx',],
		extensions: ['.jsx'],
		debug: true,
		transform:['babelify'],
		cache:{},
		packageCache: {},
		fullPaths: true
	}));

	function build(file){
		if (file) gutil.log('Recompiling ' + file);
		return bundler
			.bundle()
			.on('error', gutil.log.bind(gutil, 'Browserify Error'))
			.pipe(source('dashboardApp.js'))
			.pipe(gulp.dest('javascripts/js/'));
	};
	build()
	bundler.on('update', build)
});

//TASK FOR EACH COMMUNITY WHEN RENDERED TO THE DASHBBOARD
gulp.task('individualCommView', function(){
	var bundler = watchify(browserify({
		entries: ['javascripts/jsx/individualCommView/individualCommView.jsx'],
		extensions: ['.jsx'],
		debug: true,
		transform:[babelify],
		cache:{},
		packageCache: {},
		fullPaths: true
	}));

	function build(file){
		if (file) gutil.log('Recompiling ' + file);
		return bundler
			.bundle()
			.on('error', gutil.log.bind(gutil, 'Browserify Error'))
			.pipe(source('individualCommView.js'))
			.pipe(gulp.dest('javascripts/js/'));
	};
	build()
	bundler.on('update', build)
});