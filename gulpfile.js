var gulp = require('gulp'),
    gutil = require('gulp-util'),
    less = require('gulp-less-sourcemap'),
    notify = require('gulp-notify'),
    connect = require('gulp-connect');

    gulp.task('webserver', function() {
      connect.server({
        livereload: true
      });
    });

gulp.task('less', function() {
  gulp.src('assets/less/main.less')
    .pipe(less({
      sourceMap: {
          sourceMapRootpath: 'assets/less' // Optional absolute or relative path to your LESS files
        }
    }))
    .pipe(gulp.dest('assets/css'))
    .pipe(connect.reload())
    .pipe(notify({ message: 'LESS task complete' }));
});

gulp.task('html', function() {
    return gulp.src('*.html')
        .pipe(gulp.dest(''))
        .pipe(connect.reload())
        .pipe(notify({ message: 'HTML task complete' }));
});

gulp.task('js', function() {
    return gulp.src('assets/js/*.js')
        .pipe(gulp.dest('assets/js'))
        .pipe(connect.reload())
        .pipe(notify({ message: 'JS task complete' }));
});

gulp.task('watch', function() {
    // Watch LESS files
    gulp.watch("assets/less/**/*.less", ['less']);
    // Watch html files
    gulp.watch('*.html', ['html']);
    // Watch js files
    gulp.watch('assets/js/*.js', ['js']);
});


gulp.task('default', ['less', 'webserver', 'html', 'js', 'watch'], function(){
    return gutil.log('Gulp is running bitch!');
});
