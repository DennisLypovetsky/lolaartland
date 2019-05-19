module.exports = function () {
  var cbString = new Date().getTime();
  $.gulp.task('cachebust', function () {
    return $.gulp.src('src/markup/layouts/*.pug')
      .pipe($.gp.replace(/v=\d+/g, 'v=' + cbString))
      .pipe($.gulp.dest('src/markup/layouts/'));
  });
};
