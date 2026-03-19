const gulp = require("gulp");
const webp = require('gulp-webp');
const gulpif = require("gulp-if");
const config = require("../config");

function mediaWebp() {
	return gulp.src(config.paths.src.mediaMain)
		.pipe(webp())
		.pipe(gulpif(config.isProd, gulp.dest(config.paths.dist.media), gulp.dest(config.paths.build.media)));
}

module.exports = mediaWebp;
