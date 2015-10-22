var gulp = require('gulp');
var less = require('gulp-less');
var path = require('path');
var plumber = require('gulp-plumber');
var livereload = require('gulp-livereload');

gulp.task('less', function(){
	gulp.src('less/global.less')
	.pipe(plumber())
	.pipe(less())
	.pipe(gulp.dest('css/'))
	.pipe(livereload());
});

gulp.task('watch', function(){
	livereload.listen();
	gulp.watch('less/*.less', ['less']);
});

gulp.task('default', ['less', 'watch']);