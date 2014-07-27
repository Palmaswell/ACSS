var gulp        = require('gulp');
var browserSync = require('browser-sync');

gulp.task('browserSync', ['build'], function() {
	browserSync.init(['build/**'], {
		server: {
			baseDir: 'build'
		}
	});
});
