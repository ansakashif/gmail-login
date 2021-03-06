var gulp = require('gulp');
var less = require('gulp-less');
var browserSync = require('browser-sync').create();
gulp.task('browserSync', function() {
    browserSync.init({
        server:{
            baseDir:'./'
        },
    })
});

gulp.task('less', function() {
    return gulp.src('css/**/*.less')
    .pipe(less())
    .pipe(gulp.dest('css'))
    .pipe(browserSync.reload({stream: true}))
});

gulp.task('watch',['browserSync', 'less'], function() {
    gulp.watch('css/**/*.less', ['less']);
});
