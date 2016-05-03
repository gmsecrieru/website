const gulp = require('gulp');
const gutil = require('gulp-util');
const sass = require('gulp-sass');
const cleanCSS = require('gulp-clean-css');
const concat = require('gulp-concat');
const uglify = require('gulp-uglify');
const babel = require('gulp-babel');

gulp.task('build', function() {
  // scss
  gulp.src('./src/style.scss')
    .pipe(sass().on('error', gutil.log))
    .pipe(concat('styles.css'))
    .pipe(cleanCSS().on('error', gutil.log))
    .pipe(gulp.dest('./dist/assets'));

  // js
  gulp.src('./src/script.js')
    .pipe(babel({
      presets: ['es2015']
    }).on('error', gutil.log))
    .pipe(uglify().on('error', gutil.log))
    .pipe(gulp.dest('./dist/assets'));
});

gulp.task('dev', ['build'], function() {
  gulp.watch('./src/*', ['build']);
});

gulp.task('default', ['dev']);
