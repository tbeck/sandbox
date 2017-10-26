var gulp   = require('gulp');
var config = require('../../config').watch;

// Start browsersync task and then watch files for changes
gulp.task('watch', ['browsersync'], function() {
  gulp.watch(config.jekyll,    ['jekyll-rebuild']);
  gulp.watch(config.scripts,   ['scripts', 'jshint']);
  gulp.watch(config.sass,      ['sass', 'scsslint']);
  gulp.watch(config.images,    ['images']);
  gulp.watch(config.iconfonts, ['copy:fonts']);
  gulp.watch(config.sprites,   ['sprites']);
  gulp.watch(config.assets,    ['shopify:assets', 'cloudcannon:assets']);
});