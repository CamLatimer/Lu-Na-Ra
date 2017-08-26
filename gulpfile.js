const gulp = require('gulp');
const sourcemaps = require('gulp-sourcemaps');
const sass = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');
const browserify = require('browserify');
const babelify = require('babelify');
const uglify = require('gulp-uglify');
const gulpif = require('gulp-if');
const source = require('vinyl-source-stream');
const streamify = require('gulp-streamify');
const browserSync = require('browser-sync').create();
const reload = browserSync.reload;

// run front end development server, do page reloads, etc
gulp.task('default', ['sass', 'jsDev', 'watch'], () => {

    // initialize browsersync
    browserSync.init({
        proxy: "http://localhost:80",
        open: false,
    })
})

// bundle, compress, minify, etc files for production
gulp.task('build', ['sass', 'jsBuild'], () => {
  console.log('code is built for production...');
})

// Compile sass into CSS & auto-inject into browsers
gulp.task('sass', () =>  {
  gulp.src('./scss/style.scss')
           .pipe(sourcemaps.init())
           .pipe(sass({outputStyle: 'compressed'})).on('error', sass.logError)
           .pipe(sourcemaps.write())
          //  .pipe(autoprefixer({
          //     browsers: ['last 3 versions'],
          //     cascade: false
          //   }))
           .pipe(gulp.dest('./'))
           .pipe(browserSync.stream());
})

gulp.task('watch', () => {
  gulp.watch(['./*.php' ], reload);
  gulp.watch(['./js/**/*.js'], ['jsDev']);
  gulp.watch([ './scss/**/*.scss'], ['sass'])
console.log('gulp is up...');
})

// Bundle javascript
gulp.task('jsDev', () => {
  jsBundle(false);
})
gulp.task('jsBuild', () => {
  jsBundle(true, 'production');
})

function jsBundle(flag, env){
  // process.env.NODE_ENV = env || 'development';s
  // todo: tweak minification settings according to env
  let minify = flag;
  browserify('./js/entry.js', {
    debug: true,
    transform: ['babelify',]
  })
  .bundle()
  .on("error", function (err) { console.log("Error: " + err); })
  .pipe(source('bundle.js'))
  .pipe(gulpif(minify, streamify(uglify())))
  .pipe(gulp.dest('./dist/js/'))
  .pipe(browserSync.stream());
}
