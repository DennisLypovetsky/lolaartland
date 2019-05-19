module.exports = function () {
  $.gulp.task('watch', function () {
    $.gulp.watch(['src/markup/**/*.pug', 'src/blocks/**/*.pug'], $.gulp.series('pug:dev'));
    $.gulp.watch(['src/styles/**/*.scss', 'src/blocks/**/*.scss'], $.gulp.series('sass:dev'));
    $.gulp.watch(['src/scripts/main.js', 'src/blocks/**/*.js'], $.gulp.series('js:dev'));
    $.gulp.watch('src/blocks/svg-sprite/svg/*.svg', $.gulp.series('svg'));
    $.gulp.watch('src/static/img/**/*', $.gulp.series('img:dev'));
  });
}
