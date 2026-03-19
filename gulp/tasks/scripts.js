const gulp = require("gulp");
const plumber = require("gulp-plumber");
const notify = require("gulp-notify");
const sourcemaps = require("gulp-sourcemaps");
const concat = require("gulp-concat");
const gulpif = require("gulp-if");
const uglify = require("gulp-uglify-es").default;
const rename = require("gulp-rename");
const config = require("../config");
const webpack = require("webpack-stream");

function scripts() {
	gulp.src(config.paths.src.jsVendors)
		.pipe(plumber({ errorHandler: notify.onError("Error: <%= error.message %>") }))
		.pipe(concat("vendors.js"))
		.pipe(
			gulpif(
				config.isProd,
				uglify({
					// reduce or not the name of the arguments of variables, etc.
					mangle: false,
					output: {
						// align js code
						beautify: false,
						// delete or not comments
						comments: false,
					},
					toplevel: true,
				}),
			),
		)
		.pipe(gulpif(config.isProd, rename({ extname: ".min.js" })))
		.pipe(gulpif(config.isProd, gulp.dest(config.paths.dist.js), gulp.dest(config.paths.build.js)));
	return gulp.src(config.paths.src.js)
		.pipe(plumber({ errorHandler: notify.onError("Error: <%= error.message %>") }))
		.pipe(gulpif(!config.isProd, sourcemaps.init()))
		.pipe(webpack({
			mode: `${config.isProd ? "production" : "development"}`,
			performance: { hints: false },
			module: {
				rules: [
					{
						test: /\.(js)$/,
						exclude: /(node_modules)/,
						use: {
							loader: "babel-loader",
							options: {
								presets: ["@babel/env"],
								plugins: ["babel-plugin-root-import"]
							}
						}
					}
				]
			}
		}))
		.pipe(concat("main.js"))
		.pipe(
			gulpif(
				config.isProd,
				uglify({
					// reduce or not the name of the arguments of variables, etc.
					mangle: false,
					output: {
						// align js code
						beautify: false,
						// delete or not comments
						comments: false,
					},
					toplevel: true,
				}),
			),
		)
		.pipe(gulpif(config.isProd, rename({ extname: ".min.js" })))
		.pipe(gulpif(!config.isProd, sourcemaps.write()))
		.pipe(gulpif(config.isProd, gulp.dest(config.paths.dist.js), gulp.dest(config.paths.build.js)));
}

module.exports = scripts;
