var gulp    = require('gulp'),
	jshint 	= require('gulp-jshint'),
	gulp = require('gulp'),
	mocha = require('gulp-mocha'),
	gulpSequence = require('gulp-sequence').use(gulp),
	shell       = require('gulp-shell'),
	util = require('gulp-util');

 
gulp.task('test', function () {
    return gulp.src(['test/**/*.js'], { read: false })
        .pipe(mocha({ reporter: 'spec' }))
        .on('error', util.log);
});
 

gulp.task('watch-test', function () {
    gulp.watch(['test/**'], ['test']);
});
 


gulp.task('clean', function() {
	return shell.task([
		'rm -rf dist'
		]);
});



gulp.task('prod', gulpSequence('clean', ['test']));

