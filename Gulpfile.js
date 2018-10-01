var gulp = require('gulp');
var pug = require('gulp-pug');
var imagemin = require('gulp-imagemin');

gulp.task('pug', function () {
  gulp.src('src/pug/*.pug')
    .pipe(pug())
    .pipe(gulp.dest('www'));
});

gulp.task('images', function () {
  gulp.src('src/images/*')
    .pipe(imagemin())
    .pipe(gulp.dest('images'))
}
);

gulp.task('watch', function () {
  gulp.watch('src/pug/*', ['pug']);
});

gulp.task('default', ['pug', 'images', 'watch']);