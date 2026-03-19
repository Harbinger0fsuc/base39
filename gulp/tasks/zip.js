const gulp = require("gulp");
const del = require("del");
const gulpif = require("gulp-if");
const plumber = require("gulp-plumber");
const notify = require("gulp-notify");
const zipPlugin = require("gulp-zip");
const config = require("../config");

function zip() {
	return gulp.src(gulpif(config.isProd, `${config.paths.dist.root}/**/*.*`, `${config.paths.build.root}/**/*.*`))
		.pipe(plumber({ errorHandler: notify.onError( { title: "ZIP", message: "Error: <%= error.message %>" } ) }))
		.pipe(zipPlugin(gulpif(config.isProd, `${config.paths.dist.root}.zip`, `${config.paths.build.root}.zip`)))
		.pipe(gulp.dest(config.paths.src.root));
}

module.exports = zip;
