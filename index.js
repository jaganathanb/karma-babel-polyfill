var path = require("path");

var pattern = function(file) {
	return {pattern: file, included: true, served: true, watched: false};
};

var framework = function(files) {
	files.unshift(pattern(path.resolve(require.resolve('babel-polyfill'), '../../dist/polyfill.js')
));
};

framework.$inject = ["config.files"];
module.exports = {"framework:babel-polyfill": ["factory", framework]};
