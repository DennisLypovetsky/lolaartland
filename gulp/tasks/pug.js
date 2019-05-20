module.exports = function () {
  $.gulp.task('pug:dev', function () {
    return $.gulp.src('src/markup/pages/*.pug')
      .pipe($.gp.plumber({
        errorHandler: $.gp.notify.onError()
      }))
      // .on('error', function (err) { gutil.log(gutil.colors.red('[Error]'), err.toString()); })
      .pipe($.gp.pug({
        pretty: true
      }))
      .pipe($.gulp.dest('build'));
  });

  $.gulp.task('pug:build', function () {
    return $.gulp.src('src/markup/pages/*.pug')
      .pipe($.gp.plumber({
        errorHandler: $.gp.notify.onError()
      }))
      .pipe($.gp.pug({
        pretty: false
      }))
      .pipe($.gulp.dest('build'));
  });
}
