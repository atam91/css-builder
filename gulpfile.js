const gulp = require('gulp');
const less = require('gulp-less');
const path = require('path');
const autoprefixer = require('gulp-autoprefixer');
const csso = require('gulp-csso');
const clean = require('gulp-clean');


gulp.task('clean', function () {  
    return gulp.src('css', {read: false})
        .pipe(clean());
});


gulp.task('default', [ 'clean' ], function () {
  return gulp.src('./less/*.less')
    .pipe(less())
    .pipe(autoprefixer())
    .pipe(csso())
    .pipe(gulp.dest('./css'));
});




