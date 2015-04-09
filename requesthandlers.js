/*global require, exports, console*/

var fs = require('fs');

/**
 * Route handlers for different url paths
 **/
function start(response) {
	'use strict';
	console.log("Request handler 'start' was called.");

	fs.readFile('start/index.html', function (err, body) {
		response.writeHead(200, {"Content-Type": "text/html"});
		response.write(body);
		response.end();
	});
}

function upload(response) {
	'use strict';
	console.log("Request handler 'upload' was called.");
	response.writeHead(200, {"Content-Type": "text/plain"});
	response.write("Hello Upload");
	response.end();
}

exports.start  = start;
exports.upload = upload;