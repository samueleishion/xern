'use strict';

var gulp = require('gulp'),
  gutil = require('gulp-util'),
  exec = require('gulp-exec'),
  sass = require('gulp-sass'),
  concat = require('gulp-concat'),
  eslint = require('gulp-eslint'),
  prettier = require('gulp-prettier'),
  rename = require('gulp-rename'),
  bs = require('browser-sync').create(),
  webpack = require('webpack'),
  webpackStream = require('webpack-stream'),
  webpackConfig = require('./webpack.config.js'),
  eslintConfig = {
    configFile: 'eslintrc.json',
    rules: {
      "no-console": "off"
    }
  };

// Dev mode with hot-reloading
gulp.task('browser-sync', function() {
  bs.init({
    proxy: 'localhost:3000',
    logFileChanges: true
  });

  // return gulp.watch(['./src/**/*.*'], function() {
  return gulp.watch(['./static/**/*.*'], function() {
    setTimeout(function() {
      bs.reload();
    }, 500);
  });
});

gulp.task('sass', function() {
  return gulp
    .src(['./src/layouts/perspective.scss'])
    .pipe(
      sass({
        includePaths: ['./src/layouts/', './src/components/', './src/modules'],
        outputStyle: 'compressed'
      }).on('error', sass.logError)
    )
    .pipe(rename('perspective.min.css'))
    .pipe(gulp.dest('./static/stys'));
})

gulp.task('sass:watch', function() {
  return gulp.watch(['./src/**/*.scss'], ['sass']);
});

gulp.task('js', function() {
  return gulp
    .src(['./src/**/*.js','./src/**/*.jsx'])
    .pipe(eslint(eslintConfig))
    .pipe(eslint.format())
    // .pipe(concat('bundle.js'))
    // .pipe(gulp.dest('./static/scrs'))
    .on('error', function(err) {
      gutil.log(gutil.colors.red('[ERROR]', err.toString()));
    })
    .pipe(webpackStream(webpackConfig, webpack))
    // .pipe(exec('./node_modules/webpack/bin/webpack.js --progress --colors'))
    .pipe(gulp.dest('./static/scrs'));
});

gulp.task('js:watch', function() {
  return gulp.watch(['./src/**/*.js','./src/**/*.jsx'], ['js']);
});

gulp.task('dev', function() {
  gulp.start('sass');
  gulp.start('sass:watch');
  gulp.start('js');
  gulp.start('js:watch');
  gulp.start('browser-sync');
});

gulp.task('prod', function() {
  gulp.start('sass');
  gulp.start('js');
});
