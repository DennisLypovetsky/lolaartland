module.exports = function () {
  // svg-спрайт
  $.gulp.task('svg', function () {
    return $.gulp.src('src/blocks/svg-sprite/svg/*.svg')
      .pipe($.gulp.dest('build/img/svg/')) // просто копируем для бекапа
      .pipe($.gp.svgmin({
        js2svg: {
          pretty: true
        }
      }))
      .pipe($.gp.cheerio({
        run: function ($) {
          $('[fill]').removeAttr('fill');
          $('[stroke]').removeAttr('stroke');
          $('[style]').removeAttr('style');
        },
        parserOptions: {
          xmlMode: true
        }
      }))
      .pipe($.gp.replace('&gt;', '>'))
      .pipe($.gp.svgSprite({
        mode: {
          symbol: {
            sprite: 'sprite.svg'
          }
        }
      }))
      .pipe($.gulp.dest('build/img/svg/'))
  });
}
