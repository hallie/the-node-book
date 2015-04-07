/*global exports, console*/

/**
 * Route handlers for different url paths
 **/
function start() {
	'use strict';
	console.log("Request handler 'start' was called.");
}

function upload() {
	'use strict';
	console.log("Request handler 'upload' was called.");
}

exports.start  = start;
exports.upload = upload;