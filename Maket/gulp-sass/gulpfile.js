const gulp = require ('gulp')
const { logError } = require('gulp-sass')
const sass = require ('gulp-sass')
const sourcemaps = require ('gulp-sourcemaps')
const watch = require ('gulp-watch')

const newLocal = 'sass-compile'
gulp.task(newLocal, function(){
    return gulp.src('./scss/**/*.scss')
    .pipe(sourcemaps.init())
    .pipe(sass().on('error', sass.logError))
    .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest('./css/'))
})

gulp.task('watch', function(){
    gulp.watch('./scss/**/*.scss', gulp.series('sass-compile'))
})