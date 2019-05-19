'use strict';

global.$ = {
  gulp: require('gulp'),
  gp: require('gulp-load-plugins')(),
  del: require('del'),
  browserSync: require('browser-sync').create(),
  mozjpeg: require('imagemin-mozjpeg'),
  pngquant: require('imagemin-pngquant'),

  path: {
    tasks: require('./gulp/config/tasks')
  }
};

// require-им массив в /gulp/config/tasks.js сюда
$.path.tasks.forEach(function (taskPath) {
  require(taskPath)();
});

$.gulp.task('default', $.gulp.series(
  $.gulp.parallel('clean'),
  $.gulp.parallel('pug:dev', 'sass:dev', 'js:dev', 'img:dev', 'svg'),
  $.gulp.parallel('watch', 'serve')
));

$.gulp.task('build', $.gulp.series(
  $.gulp.parallel('clean'),
  $.gulp.parallel('cachebust'),
  $.gulp.parallel('pug:build', 'sass:build', 'js:build', 'img:build', 'svg')
));
