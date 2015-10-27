var gulp = require('gulp');
var less = require('gulp-less');
var path = require('path');
var plumber = require('gulp-plumber');
var livereload = require('gulp-livereload');
		
gulp.task('less', function(){
	gulp.src('stylesheets/less/global.less')
	.pipe(plumber())
	.pipe(less())
	.pipe(gulp.dest('stylesheets/css/'))
	.pipe(livereload());
});
