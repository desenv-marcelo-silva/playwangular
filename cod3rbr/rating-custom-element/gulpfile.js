const { series, src, dest } = require("gulp");
const concat = require("gulp-concat");
const rename = require("gulp-rename");

function _concat(cb) {
  return src("./dist/rating-custom-element/*.js")
    .pipe(concat("rating.js"))
    .pipe(dest("./dist/element"));

  cb();
}

function _rename(cb) {
  return src("./dist/rating-custom-element/*.css")
    .pipe(rename("rating.css"))
    .pipe(dest("./dist/element"));

  cb();
}

function _fonts(cb) {
  return src(["./dist/rating-custom-element/fontawesome-webfont.*"]).pipe(
    dest("./dist/element")
  );

  cb();
}

exports.default = series(_concat, _rename, _fonts);
