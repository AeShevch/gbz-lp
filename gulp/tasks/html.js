const gulp = require('gulp')
const plumber = require('gulp-plumber')
const rigger = require('gulp-rigger')
const htmlValidator = require('gulp-w3c-html-validator')
const bemValidator = require('gulp-html-bem-validator')
const config = require('../config')

module.exports = function html() {
  return gulp.src('src/pages/*.html')
    .pipe(plumber())
    .pipe(rigger())
    .pipe(htmlValidator())
    .pipe(bemValidator())
    .pipe(gulp.dest('build'))
}

