var gulp        = require('gulp');
var browserSync = require('browser-sync').create();
var sass        = require('gulp-sass');

// Static Server + watching sass/html files
gulp.task('serve', ['sass'], function() {

    browserSync.init({
        server: "./site"
    });

    gulp.watch("site/styles/sass/*.scss", ['sass']);
    gulp.watch("site/styles/sass/**/*.scss", ['sass']);
    gulp.watch("site/*.html").on('change', browserSync.reload);
});

// Compile sass into CSS & auto-inject into browsers
gulp.task('sass', function() {
    return gulp.src("site/styles/sass/*.scss")
        .pipe(sass())
        .pipe(gulp.dest("site/styles/css"))
        .pipe(browserSync.stream());
});

gulp.task('default', ['serve']);