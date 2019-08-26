'use strict';

const gulp = require('gulp');
const $ = require('gulp-load-plugins')();

/**
 This task minify and copies all the svg icons present in src folder
 to the lib folder.
 */
gulp.task('copy-svgs', function() {
  gulp.src('./src/svg_files/**/*.svg')
    .pipe($.svgmin({
      plugins: [
        {
          cleanupAttrs: true
        },
        {
          removeViewBox: false,
        }
      ]
    }))
    .pipe(gulp.dest('./lib/ui_icons_svgs'));
});

gulp.task('default', ['copy-svgs']);
