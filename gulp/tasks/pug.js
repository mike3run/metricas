'use strict';
const gulp          = require('gulp');
const plugins       = require('gulp-load-plugins');
const $             = plugins();
const config        = require('../config');
const when          = require('gulp-if');
// Check if gulp scripts --prod or --production has been added to the task
const argv          = require('yargs').argv;
const production    = argv.prod || argv.production;

const devLocals = {
  base : '',
  extension : '',
  productionMode : false
};

const prodLocals = {
  base : config.productionBase,
  extension : config.productionExtension,
  productionMode : true
};

gulp.task('pug', done => {
  return gulp.src('./src/pug/templates/**/!(_)*.pug')
    .pipe( $.pug({
      pretty : true,
      basedir : './src/pug'
    }) ).on('error', config.errorHandler)
   .pipe( gulp.dest(`${config.distFolder}/assets/templates`))
});

gulp.task('pug:src', done => {
  return gulp.src('./src/pug/index.pug')
    .pipe( $.pug({
      pretty : true,
      basedir : './src/pug'
    }) ).on('error', config.errorHandler)
   .pipe( gulp.dest(config.distFolder))
});
