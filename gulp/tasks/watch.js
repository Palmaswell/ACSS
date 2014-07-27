var gulp = require('gulp');

gulp.task('watch', ['setWatch', 'browserSync'], function() {
    gulp.watch('app/assets/less/**', ['styles']);
    gulp.watch('app/assets/images/**', ['images']);
    gulp.watch('app/assets/views/**', ['copy']);
	// Note: The browserify task handles js recompiling with watchify
});
