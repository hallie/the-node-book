/*global require, exports, console, route */

/**
 * Requires the HTTP module that ships Node.js and assigns it to http
 * Makes an object that carries all methods the http module provides
 **/
var http = require('http'),
	url  = require('url');

/**
 * Exporting our functions for creating a server to one called start()
 **/
function start(route, handle) {
    "use strict";
    function onRequest(request, response) {
		//Getting the pathname [url] of the request
		var pathname = url.parse(request.url).pathname;
		console.log("Request for " + pathname + " received.");
		
		//Passes the pathname through route, defined in router.js
		route(handle, pathname);
		
		//writeHead(status_code[, status_message][, header])
        response.writeHead(200, "OK", {"Content-Type": "text/plain"});
        //Sends the plain text to the content
        response.write("Hello World");
        //Ends the response
        response.end();
    }
    
    /**
    * [http].createServer returns returns a server object
    * This object has a function [server-object].listen(num)
    *   where number is the localhost number to listen on
    * Could be rewritten:
    *   var server = http.createServer();
    *   server.listen(num);
    *
    * response and request are HTTP objects that can be manipulated
    **/
    http.createServer(onRequest).listen(8686);
	console.log("Server has started on port 8686");
}

/**
 * By exporting the start function we make it public and usable by
 *     server.js objects created outside of this document.
 **/
exports.start = start;