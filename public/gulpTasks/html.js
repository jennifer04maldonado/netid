var gulp = require('gulp');
// var less = require('gulp-less');
var path = require('path');
var plumber = require('gulp-plumber');
var livereload = require('gulp-livereload');
		
gulp.task('ejs', function(){
	gulp.src('../views/*.ejs')
	.pipe(plumber())
	.pipe(livereload());
});
