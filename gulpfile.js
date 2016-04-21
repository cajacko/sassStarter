var gulp = require('gulp');
var sass = require('gulp-sass');

/********************************************************
* SASS                                                  *
********************************************************/
gulp.task('default', function() {
    return gulp.src('./sass/import.scss')
        .pipe(sass().on('error', sass.logError));
});
