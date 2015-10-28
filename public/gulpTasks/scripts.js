var gulp = require('gulp');
// var less = require('gulp-less');
var path = require('path');
var plumber = require('gulp-plumber');
var livereload = require('gulp-livereload');
		
gulp.task('dashboard', function(){
	gulp.src('javascripts/userDashboard/*.jsx')
	.pipe(plumber())
	.pipe(livereload());
});

gulp.task('individualCommView', function(){
	gulp.src('javascripts/individualCommView/*.jsx')
	.pipe(plumber())
	.pipe(livereload());
});