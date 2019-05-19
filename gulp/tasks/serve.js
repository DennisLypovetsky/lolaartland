module.exports = function () {
  $.gulp.task('serve', function () {
    $.browserSync.init({
      server: {
        baseDir: './build'
      },
      // watchEvents: ['change', 'add', 'unlink', 'addDir', 'unlinkDir'],
      reloadOnRestart: true,
      notify: false,
      ghostMode: false,
      open: false, // см. в http://localhost:3000
      // open: 'tunnel',
      // tunnel: true
    });
    $.browserSync.watch(['build', '!build/css/*'], $.browserSync.reload)
  });
}
