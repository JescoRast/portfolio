const gulp = require('gulp');
const sass = require('gulp-sass');
const prefix = require('gulp-autoprefixer');

gulp.task('copyHTML', () => {
  gulp.src('src/*.html')
    .pipe(gulp.dest('build'))
});

gulp.task('sass', () => {
  gulp.src('src/sass/*.sass')
    .pipe(sass({
      style: 'compressed'
      // style: 'expanded'
    }))
    .pipe(prefix('last 2 versions'))
    .pipe(gulp.dest('build/static/css'))
    .pipe(gulp.dest('src/static/css'))
});

gulp.task('watch', () => {
  gulp.watch('src/*.html', ['copyHTML']);
  gulp.watch('src/sass/*.sass', ['sass']);
});
