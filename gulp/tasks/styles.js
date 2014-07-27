var gulp         = require('gulp');
var less         = require('gulp-less');
var prefix       = require('gulp-autoprefixer');
var csslint      = require('gulp-csslint');
var notify       = require('gulp-notify');
var path         = require('path');
var handleErrors = require('../util/handleErrors');

gulp.task('styles', function () {
  return gulp.src('./app/assets/less/main.less')
    .pipe(less({
      paths: [ path.join(__dirname, 'less') ]
    }))
    .pipe(prefix("last 1 version", "> 1%", "ie 8", "ie 7"))
    .pipe(csslint())
    .pipe(csslint.reporter('default'))
    .pipe(gulp.dest('./build'))
    .on('error', handleErrors);
});
