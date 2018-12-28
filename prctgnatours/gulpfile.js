var gulp = require('gulp'),
	browserSync= require('browser-sync').create();

gulp.task('watch', ['styles'], function () {
	gulp.watch('./css/style.css', ['styles']);
	browserSync.init({
		server: './'
	});
});

gulp.task('styles', function(){
	return gulp.src('./css/style.css')
	.pipe(browserSync.stream())
});