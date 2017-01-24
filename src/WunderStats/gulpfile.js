/*
This file in the main entry point for defining Gulp tasks and using Gulp plugins.
Click here to learn more. http://go.microsoft.com/fwlink/?LinkId=518007
*/

var gulp = require('gulp');
var del = require('del');

//var paths = {
//    scripts: [
//        'Scripts/**/*.js',
//        'Scripts/**/*.ts',
//        'Scripts/**/*.map']
//};


//gulp.task('default', function () {
//    gulp.src(paths.scripts).pipe(gulp.dest('wwwroot/scripts'));
//});

gulp.task('semantic-build', require('./semantic/tasks/build'));
gulp.task('semantic-build-javascript', require('./semantic/tasks/build/javascript'));
gulp.task('semantic-build-css', require('./semantic/tasks/build/css'));
gulp.task('semantic-build-assets', require('./semantic/tasks/build/assets'));
gulp.task('semantic-watch', require('./semantic/tasks/watch'));

gulp.task('build', ['semantic-build']);
gulp.task('build-javascript', ['semantic-build-javascript']);
gulp.task('build-css', ['semantic-build-css']);
gulp.task('build-assets', ['semantic-build-assets']);
gulp.task('watch', ['semantic-watch']);