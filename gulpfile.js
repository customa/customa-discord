var gulp = require("gulp");
var cleanCss = require("gulp-clean-css");

var modules = [
  "Base",
  "Chat",
  "Emoji",
  "Misc",
  "Sidebar",
  "Titlebar",
  "Webkit",
  "WIP"
];
var paths = {
  src: modules.map(dir => dir + "/**/*.m.css"),
  destMin: "dist",
  destSrc: "src"
};

function copy() {
  return gulp
    .src(paths.src, { base: "." })
    .pipe(gulp.dest(paths.destSrc))
}

function minify() {
  return gulp
    .src(paths.src, { base: "." })
    .pipe(cleanCss())
    .pipe(gulp.dest(paths.destMin));
}

exports.default = minify;
exports.default = copy;
