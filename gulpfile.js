const gulp = require('gulp');
const sass = require('gulp-sass');

gulp.task('copyHTML', () => {
  gulp.src('src/templates/*.html')
    .pipe(gulp.dest('build/templates'))
});

gulp.task('sass', () => {
  gulp.src('src/sass/*.sass')
    .pipe(sass())
    .pipe(gulp.dest('build/static/css'))
    .pipe(gulp.dest('src/static/css'))
});

gulp.task('watch', () => {
  gulp.watch('src/templates/*.html', ['copyHTML']);
  gulp.watch('src/sass/*.sass', ['sass']);
});
