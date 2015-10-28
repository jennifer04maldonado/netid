var gulp = require('gulp');
var less = require('gulp-less');
var path = require('path');
var plumber = require('gulp-plumber');
var livereload = require('gulp-livereload');
// var plugins = require('gulp-load-plugins')();
var requireDir = require('require-dir');
requireDir('gulpTasks');


gulp.task('watch', function(){
	livereload.listen()
	gulp.watch('stylesheets/less/*.less', ['less']);
	gulp.watch('../views/*.ejs', ['ejs']);
	gulp.watch('javascripts/userDashboard/*.jsx', ['dashboard']);
	gulp.watch('javascripts/individualCommView/*.jsx', ['individualCommView']);
});
gulp.task('default', ['less', 'ejs', 'dashboard', 'individualCommView', 'watch']);