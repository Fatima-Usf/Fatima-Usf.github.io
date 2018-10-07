var gulp = require('gulp');
var pug = require('gulp-pug');

gulp.task('pug',function(){
    gulp.src('src/pug/*.pug')
        .pipe(pug())
        .pipe(gulp.dest('www'));
});

gulp.task('watch',function(){
    gulp.watch('src/pug/*', ['pug']);
});

gulp.task('default',['pug','watch']);