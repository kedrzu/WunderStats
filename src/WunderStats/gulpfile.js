/*
This file in the main entry point for defining Gulp tasks and using Gulp plugins.
Click here to learn more. http://go.microsoft.com/fwlink/?LinkId=518007
*/

var gulp = require('gulp');
var del = require('del');


var paths = {
    scripts: [
        'Scripts/**/*.js',
        'Scripts/**/*.ts',
        'Scripts/**/*.map']
};


gulp.task('default', function () {
    gulp.src(paths.scripts).pipe(gulp.dest('wwwroot/scripts'));
});