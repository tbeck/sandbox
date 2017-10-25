var gulp   = require('gulp');
var config = require('../../config').copyfonts.development;
var shopify = require('../../config').shopify;

/**
 * Copy fonts to folder
 */
gulp.task('copy:fonts', function() {
  return gulp.src(config.src)
    .pipe(gulp.dest(shopify.assets))
    .pipe(gulp.dest(config.dest));
});