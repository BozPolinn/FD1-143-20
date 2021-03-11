var gulp = require('gulp');
var sass = require('gulp-sass');
var autoprefixer = require('autoprefixer');
var sourcemaps = require('gulp-sourcemaps');
var postcss = require('gulp-postcss');
var cssnano = require('cssnano');
var flexbugsFixes = require('postcss-flexbugs-fixes');
 
sass.compiler = require('node-sass');
 
gulp.task('sass', function () {
  var postcssPlugins = [
    autoprefixer(),
    flexbugsFixes(),
    cssnano()
  ];

  return gulp.src('./*.scss')
    .pipe(sourcemaps.init())
    .pipe(sass().on('error', sass.logError))
    .pipe(sourcemaps.write({ includeContent: false }))
    .pipe(sourcemaps.init({ loadMaps: true }))
    .pipe(postcss(postcssPlugins))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('./'));
});
 
gulp.task('sass:watch', function () {
  gulp.watch('./*.scss', gulp.parallel('sass'));
});