//Calling in Gulp famework
var gulp = require('gulp');

//Calling in Gulp plugins
var minifyCSS = require('gulp-minify-css');
const imagemin = require('gulp-imagemin');
var htmlmin = require('gulp-htmlmin');


//Terminal example of gulp
gulp.task('name-task', function(){
	console.log('Wow, gulp is cool!');
});


//Minifying HTML file task
gulp.task('minify-html', function() {
  return gulp.src('./app/*.html')
    .pipe(htmlmin({collapseWhitespace: true}))
    .pipe(gulp.dest(''));
});


//Minifying css file task
gulp.task('minify-css',function(){
	return gulp.src('./css/style.css')
	.pipe(minifyCSS())
	.pipe(gulp.dest('build'))
});

//Image optomisation
gulp.task('minify-image', () =>
    gulp.src('./images/*')
        .pipe(imagemin())
        .pipe(gulp.dest('images'))
);