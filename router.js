/*global console, exports, handle*/

/**
 * Router
 **/
function route(handle, pathname) {
	'use strict';
	console.log("About to route a request for " + pathname);
	if (typeof handle[pathname] === 'function') {
		handle[pathname]();
	} else {
		console.log("No request handler found for " + pathname);
	}
}

exports.route = route;