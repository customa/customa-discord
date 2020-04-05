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
  dest: "dist",
  destSrc: "src"
};

function minify() {
  return gulp
    .src(paths.src, { base: "." })
    .pipe(cleanCss())
    .pipe(gulp.dest(paths.dest));
}

exports.default = minify;
exports.default = copy;
