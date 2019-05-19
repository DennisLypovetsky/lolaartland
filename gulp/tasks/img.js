module.exports = function () {
  $.gulp.task('img:dev', function () {
    return $.gulp.src('src/blocks/**/img/*.{png,jpg,webp,svg}')
      .pipe($.gulp.dest('build/img/'));
  });

  $.gulp.task('img:build', function () {
    return $.gulp.src('src/blocks/**/img/*.{png,jpg,webp,svg}')
      .pipe($.gp.imagemin([
        $.mozjpeg({
          quality: 65
        }),
        $.pngquant({
          quality: [0.65, 0.75],
          speed: 1
        })
      ]))
      .pipe($.gulp.dest('build/img/'));
  });
}
