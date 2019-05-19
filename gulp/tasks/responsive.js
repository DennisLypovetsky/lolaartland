module.exports = function () {
  $.gulp.task('responsive', function () {
    return $.gulp.src('src/static/data-img/**/*.{png,jpg}')
      .pipe($.gp.responsive({
        '**/*.png': [{
          width: 1280,
          rename: {
            suffix: '_1280'
          }
        }, {
          width: 720,
          rename: {
            suffix: '_720'
          }
        }, {
          width: 480,
          rename: {
            suffix: '_480'
          }
        }, {
          width: 320,
          rename: {
            suffix: '_320'
          }
        }],
        '**/*.jpg': [{
          width: 2560,
          rename: {
            suffix: '_2560'
          }
        }, {
          width: 1920,
          rename: {
            suffix: '_1920'
          }
        }, {
          width: 1280,
          rename: {
            suffix: '_1280'
          }
        }, {
          width: 640,
          rename: {
            suffix: '_640'
          }
        }, {
          width: 480,
          rename: {
            suffix: '_480'
          }
        }, {
          width: 320,
          rename: {
            suffix: '_320'
          }
        }]
      }, {
          progressive: true,
          withMetadata: false
        })
      )
      .pipe($.gulp.dest('src/static/img/'));
  });
}
