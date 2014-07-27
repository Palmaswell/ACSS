var changed    = require('gulp-changed');
var gulp       = require('gulp');

gulp.task('fonts', function() {
    var dest = './build/fonts';

    return gulp.src('./app/assets/fonts/**')
        .pipe(changed(dest)) // Ignore unchanged files
        .pipe(gulp.dest(dest));
});
