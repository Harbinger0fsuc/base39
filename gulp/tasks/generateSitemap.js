const gulp = require("gulp");
const sitemap = require("gulp-sitemap");
const save = require("gulp-save");
const gulpif = require("gulp-if");
const config = require("../config");

function generateSitemap() {
	return gulp
		.src(config.paths.src.htmlSitemap, {
			read: false,
		})
		.pipe(save("before-sitemap"))
		.pipe(
			sitemap({
				siteUrl: config.paths.src.siteUrl,
			})
		)
		.pipe(gulpif(config.isProd, gulp.dest(config.paths.dist.root), gulp.dest(config.paths.build.root)))
		.pipe(save.restore("before-sitemap"));
}

module.exports = generateSitemap;
