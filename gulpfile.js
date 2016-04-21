/**
 * Gulp sass is used here to test if the sass is compiling 
 * correctly. After 'npm install' run 'gulp' to check.
 */

var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('default', function() {
    return gulp.src('./scss/import.scss')
        .pipe(sass().on('error', sass.logError));
});
