const gulp = require("gulp");
const toProd = require("./gulp/tasks/toProd");
const clean = require("./gulp/tasks/clean");
const html = require("./gulp/tasks/html");
const styles = require("./gulp/tasks/styles");
const scripts = require("./gulp/tasks/scripts");
const fonts = require("./gulp/tasks/fonts");
const others = require("./gulp/tasks/others");
const creds = require("./gulp/tasks/creds");
const generateSitemap = require("./gulp/tasks/generateSitemap");
const media = require("./gulp/tasks/media");
const mediaWebp = require("./gulp/tasks/mediaWebp");
const mediaAvif = require("./gulp/tasks/mediaAvif");
const watchFiles = require("./gulp/tasks/watchFiles");
const svgSprite = require("./gulp/tasks/svgSprite");
const zip = require("./gulp/tasks/zip");
const cleanZip = require("./gulp/tasks/cleanZip");

exports.default = gulp.series(
	clean,
	html,
	generateSitemap,
	scripts,
	styles,
	gulp.parallel(fonts, others, creds),
	gulp.parallel(watchFiles, media, mediaWebp, mediaAvif, svgSprite),
);

exports.dist = gulp.series(
	toProd,
	clean,
	html,
	generateSitemap,
	scripts,
	styles,
	gulp.parallel(fonts, others, creds),
	gulp.parallel(watchFiles, media, mediaWebp, mediaAvif, svgSprite),
);

exports.zipFiles = gulp.series(
	cleanZip,
	zip,
);

exports.zipFilesDist = gulp.series(
	cleanZip,
	toProd,
	zip,
);
