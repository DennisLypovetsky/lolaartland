module.exports = function () {
  // Сюда добавляем все новые .js файлы (блоки и библиотеки)
  // Библиотеки вручную(
  // Собирает в два одинаковых файла с разным названием (без минификации)
  $.gulp.task('js:dev', function () {
    return $.gulp.src([
      'node_modules/lazysizes/lazysizes.js',
      'src/blocks/**/*.js',
      '!src/blocks/bemto/{,/**}',
      'src/scripts/*.js' // всегда в конце
    ])
      // .pipe($.gp.plumber({
      //   errorHandler: $.gp.notify.onError()
      // }))
      .on('error', function (err) { gutil.log(gutil.colors.red('[Error]'), err.toString()); })
      .pipe($.gp.concat('scripts.js'))
      .pipe($.gulp.dest('build/js/'))
      .pipe($.gp.rename('scripts.min.js'))
      .pipe($.gulp.dest('build/js/'));
  });

  // Собирает и минифицирует
  $.gulp.task('js:build', function () {
    return $.gulp.src([
      'node_modules/lazysizes/lazysizes.js',
      'src/blocks/**/*.js',
      '!src/blocks/bemto/{,/**}',
      'src/scripts/*.js' // всегда в конце
    ])
      // .pipe($.gp.plumber({
      //   errorHandler: $.gp.notify.onError()
      // }))
      .on('error', function (err) { gutil.log(gutil.colors.red('[Error]'), err.toString()); })
      .pipe($.gp.concat('scripts.js'))
      .pipe($.gulp.dest('build/js/'))
      .pipe($.gp.uglify())
      .pipe($.gp.rename('scripts.min.js'))
      .pipe($.gulp.dest('build/js/'));
  });
};
