var gulp = require('gulp');

gulp.task('copy', function() {
	return gulp.src('app/assets/views/**')
		.pipe(gulp.dest('build'));
});
