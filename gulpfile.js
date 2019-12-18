var gulp = require('gulp');
var sass = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');

gulp.task('style', function(){
  return gulp.src('sass/main.scss')
    .pipe(sass())
    .pipe(autoprefixer())
    .pipe(gulp.dest('./'))
});

gulp.task('watch', function(){
  gulp.watch('sass/**/*.scss', gulp.series('style')); 
})