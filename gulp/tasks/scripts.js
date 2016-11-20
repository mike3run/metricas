'use strict';
const gulp          = require('gulp');
const plugins       = require('gulp-load-plugins');
const $             = plugins();
const config        = require('../config');
const when          = require('gulp-if');

// Check if gulp scripts --prod or --production has been added to the task
const argv          = require('yargs').argv;
const production    = argv.prod || argv.production;

const destination = `${config.distFolder}/assets/javascript`;

gulp.task('scripts', done => {
  return gulp.src(config.scriptFiles)
  .pipe( $.sourcemaps.init() )
  .pipe($.concat('app.js'))
  .pipe( $.sourcemaps.write('./') )
  .pipe( gulp.dest(destination) )
})

gulp.task('scripts:vendor', done => {
  return gulp.src(config.vendorScripts)
  .pipe( $.sourcemaps.init() )
  .pipe($.concat('vendor.js'))
  .pipe( $.sourcemaps.write('./') )
  .pipe( gulp.dest(destination) )
})
