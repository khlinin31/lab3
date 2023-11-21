const gulp = require('gulp');
const browserSync = require('browser-sync').create() // подключаем browser-sync

gulp.task("task1", function(callback) {
    console.log("execute task1")
    callback()
})

gulp.task("task2", function(callback) {
    console.log("execute task2")
    callback()
})

gulp.task("test-consequence", gulp.series("task1", "task2"))
gulp.task("test-parallel", gulp.parallel("task1", "task2"))

gulp.task("start-server", function() {
    browserSync.init({
        server: {
            baseDir: "./app/"
        },
    });

    gulp.watch("./app/**/*-*").on("change", browserSync.reload);
})