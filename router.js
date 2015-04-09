/*global console, exports, handle*/

/**
 * Router
 **/
function route(handle, pathname, response) {
	'use strict';
	console.log("About to route a request for " + pathname);
	if (typeof handle[pathname] === 'function') {
		//When we pass the response to the handler, we can manipulate
		//  it within the function for that particular pathname
		handle[pathname](response);
	} else {
		console.log("No request handler found for " + pathname);
		response.writeHead(404, {"Content-Type": "text/plain"});
		response.write("404 Not Found");
		response.end();
	}
}

exports.route = route;