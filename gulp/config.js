const buildPath = "build";
const distPath = "dist";

const config = {
	paths: {
		src: {
			root: "./",
			siteUrl: "http://www.amazon.com",
			html: ["*.html"],
			htmlSitemap: ["*.html", "!00-sitemap.html"],
			js: ["js/*.js"],
			jsVendors: "js/vendors/**/*.js",
			style: "scss/*.scss",
			svg: "media/icons",
			media: [
				"media/**/*.+(jpg|jpeg|png|svg|gif|ico|JPG|JPEG|PNG|SVG|GIF|ICO)",
				"!media/wp*.+(jpg|jpeg|png|svg|gif|ico|JPG|JPEG|PNG|SVG|GIF|ICO)",
			],
			mediaMain: [
				"media/**/*.+(jpg|jpeg|png)",
				"!media/wp*.+(jpg|jpeg|png)",
			],
			fonts:
				"fonts/**/*.+(otf|eot|woff2|woff|ttf|svg|OTF|EOT|WOFF2|WOFF|TTF|SVG)",
			others: "others/**/*.*",
			creds: ["robots.txt", "*.json", "!package.json", "!package-lock.json"],
			appZipFiles: ["build.zip", "dist.zip"],
		},
		build: {
			root: buildPath,
			html: buildPath,
			js: `${buildPath}/assets/js/`,
			css: `${buildPath}/assets/css/`,
			media: `${buildPath}/assets/media/`,
			// mediaTrash: "build/content-images/",
			svg: `${buildPath}/assets/media/icons/`,
			fonts: `${buildPath}/assets/fonts/`,
			server: `${buildPath}/`,
			serverIndex: `${buildPath}/home.html`,
			others: `${buildPath}/assets/others`,
			creds: buildPath,
		},
		dist: {
			root: distPath,
			html: distPath,
			js: `${distPath}/assets/js/`,
			css: `${distPath}/assets/css/`,
			media: `${distPath}/assets/media/`,
			// mediaTrash: "build/content-images/",
			svg: `${distPath}/assets/media/icons/`,
			fonts: `${distPath}/assets/fonts/`,
			server: `${distPath}/`,
			serverIndex: `${distPath}/home.html`,
			others: `${distPath}/assets/others`,
			creds: distPath,
		},
		clean: [`!${buildPath}`, `${buildPath}/*`, `${buildPath}/*.*`, `${buildPath}/assets/**`, `${buildPath}/content-images/**`],
		cleanProd: [`!${distPath}`, `${distPath}/*`, `${distPath}/*.*`, `${distPath}/assets/**`, `${distPath}/content-images/**`],
		watch: {
			html: ["*.html", "templates/**/*.html"],
			js: ["js/**/*.js"],
			styles: ["scss/**/*.+(scss|sass)"],
			stylesCss: "scss/*.css",
			media: "media/**/*.+(jpg|jpeg|png|svg|gif|ico|JPG|JPEG|PNG|SVG|GIF|ICO)",
			mediaMain: "media/**/*.+(jpg|jpeg|png)",
			fonts: "fonts/**/*.+(otf|eot|woff2|woff|ttf|svg|OTF|EOT|WOFF2|WOFF|TTF|SVG)",
		},
	},
	retinaOptions: {
		suffix: {
			// 1: '@1x',
			2: "@2x",
			// 3: '@3x'
		},
		ignore: ["wpn-", "none-"],
	},
	isProd: false,
};

module.exports = config;
