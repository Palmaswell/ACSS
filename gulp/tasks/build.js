var gulp = require('gulp');

gulp.task('build', ['copy', 'browserify', 'styles', 'images', 'fonts']);
