
var gulp = require("gulp");
var sass = require("gulp-sass");

// Sassコンパイルタスク
gulp.task("sass", function() {
  gulp.src("./src/sass/**/*.scss")
    .pipe(sass())
    .pipe(gulp.dest("./css"));
});

// Sassを監視
gulp.task("default", function() {
    gulp.watch("./src/sass/**/*.scss",["sass"]);
});
