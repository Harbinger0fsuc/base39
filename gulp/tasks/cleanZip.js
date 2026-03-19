const del = require("del");
const config = require("../config");

function cleanZip(resolve) {
	(async () => {
		const deletedFiled = await del(config.paths.src.appZipFiles, { force: true });
	})();

	resolve();
}

module.exports = cleanZip;
