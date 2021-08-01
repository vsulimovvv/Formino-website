const { src, dest, watch, parallel, series } = require('gulp');

const scss = require('gulp-sass');
const concat = require('gulp-concat');
const browserSync = require('browser-sync').create();
const uglify = require('gulp-uglify-es').default;
const autoprefixer = require('gulp-autoprefixer');
const imagemin = require('gulp-imagemin');
const del = require('del');
const webpack = require('webpack');
const webpackStream = require('webpack-stream');
// const fileinclude = require('gulp-file-include');
// const babel = require('gulp-babel');

function browsersync() {
  browserSync.init({
    server: {
      baseDir: 'app',
    },
  });
}

function cleanDist() {
  return del('dist');
}

function images() {
  return src('app/images/**/*')
    .pipe(imagemin())
    .pipe(
      imagemin([
        imagemin.gifsicle({ interlaced: true }),
        imagemin.mozjpeg({ quality: 75, progressive: true }),
        imagemin.optipng({ optimizationLevel: 5 }),
        imagemin.svgo({
          plugins: [{ removeViewBox: true }, { cleanupIDs: false }],
        }),
      ])
    )
    .pipe(dest('dist/images'));
}

// function scripts() {
//   return src(['node_modules/jquery/dist/jquery.min.js', 'app/js/main.js'])
//     .pipe(concat('main.min.js'))
//     .pipe(uglify())
//     .pipe(dest('app/js'))
//     .pipe(browserSync.stream());
// }

// const htmlInclude = () => {
//   return src(['app/index.html'])
//     // .pipe(
//     //   fileinclude({
//     //     prefix: '@@',
//     //     basepath: '@file',
//     //   })
//     // )
//     .pipe(dest('dist'))
//     .pipe(browserSync.stream());
// };

function scripts() {
  return src('app/js/main.js')
    .pipe(
      webpackStream({
        output: {
          filename: 'main.js',
        },
        module: {
          rules: [
            {
              test: /\.m?js$/,
              exclude: /(node_modules|bower_components)/,
              use: {
                loader: 'babel-loader',
                options: {
                  presets: ['@babel/preset-env'],
                },
              },
            },
          ],
        },
      })
    )
    .pipe(concat('main.min.js'))
    .pipe(uglify())
    .pipe(dest('app/js'))
    .pipe(browserSync.stream());
}

function styles() {
  return src('app/scss/style.scss')
    .pipe(scss({ outputStyle: 'compressed' }))
    .pipe(concat('style.min.css'))
    .pipe(
      autoprefixer({ overrideBrowserslist: ['last 10 version'], grid: true })
    )
    .pipe(dest('app/css'))
    .pipe(browserSync.stream());
}

function build() {
  return src(
    [
      'app/css/style.min.css',
      'app/fonts/**/*',
      'app/js/**/main.min.js',
      'app/*.html',
    ],
    { base: 'app' }
  ).pipe(dest('dist'));
}

function wathing() {
  watch(['app/scss/**/*.scss'], styles);
  watch(['app/js/**/*.js', '!app/js/main.min.js'], scripts);
  watch(['app/*.html']).on('change', browserSync.reload);
}

exports.styles = styles;
exports.watching = wathing;
exports.browsersync = browsersync;
exports.scripts = scripts;
exports.images = images;

exports.build = series(cleanDist, images, build);
exports.default = parallel( styles, scripts, browsersync, wathing);
