'use strict';

const gulp              = require('gulp');
const browserSync       = require('browser-sync');
const requireDir        = require('require-dir');
const config            = require('./gulp/config');

// Let's require all the tasks inside gulp/tasks
requireDir('./gulp/tasks', {
  recurse : true
});

// The main building block task
gulp.task('build', gulp.series(
  'clean',
  'svg',
  'pug',
  'pug:src',
  'fonts',
  'sass',
  'scripts',
  'imagemin',
  'assets'
));

// Function to properly reload your browser
function reload(done) {
  browserSync.reload();
  done();
}

gulp.task('browser-sync', done => {
  return browserSync.init({
    server : {
      baseDir : config.distFolder,
      serveStaticOptions : {
        extensions : ['.html']
      }
    },
    open : false,
    logConnections : true
  });
});

gulp.task('watch', done => {
  gulp.watch('src/svg/inline/**/*', gulp.series('svg:inline', 'pug:src', reload))
  gulp.watch('src/svg/external/**/*', gulp.series('svg:external', reload))
  gulp.watch('src/pug/**/*', gulp.series('pug', 'pug:src', reload))
  gulp.watch('src/sass/**/*', gulp.series('sass', reload))
  gulp.watch('src/scripts/**/*', gulp.series('scripts', reload))
  gulp.watch(config.vendorScripts, gulp.series('scripts:vendor', reload))
  gulp.watch(config.rootFiles, gulp.series('root', reload))
  gulp.watch('src/assets/**/*', gulp.series('assets', reload))
  gulp.watch('src/fonts/**/*', gulp.series('fonts', reload))
  gulp.watch('src/index.pug', gulp.series('pug:src', reload))
  done();
});

gulp.task('serve', gulp.parallel('browser-sync', 'watch'));

gulp.task('default', gulp.series('build', 'serve'));

// Task for deploying to GhPages
gulp.task('deploy', gulp.series('build', 'deploy:ghPages', 'clean'));
