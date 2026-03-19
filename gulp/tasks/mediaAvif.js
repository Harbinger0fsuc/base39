const gulp = require("gulp");
const avif = require('gulp-avif');
const gulpif = require("gulp-if");
const config = require("../config");

function mediaAvif() {
	return gulp.src(config.paths.src.mediaMain)
		.pipe(avif())
		.pipe(gulpif(config.isProd, gulp.dest(config.paths.dist.media), gulp.dest(config.paths.build.media)));
}

module.exports = mediaAvif;
