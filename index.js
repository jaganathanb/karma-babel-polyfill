var path = require("path");

var pattern = function(file) {
	return {pattern: file, included: true, served: true, watched: false};
};

var framework = function(files) {
	files.unshift(pattern(path.resolve(path.dirname(require.resolve("babel-polyfill")), "babel-polyfill.js")));
};

framework.$inject = ["config.files"];
module.exports = {"framework:babel-polyfill": ["factory", framework]};
