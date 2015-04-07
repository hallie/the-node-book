/*global require*/

/**
 * Required files
 * All of its public attributes will be available in the variable object
 **/
var server = require('./server'),
	router = require('./router'),
	requestHandlers = require('./requesthandlers');

/**
 * Creates handers for specific urls
 *
 * Can also be dynamically added like so -
 *     handle['someURL'] = requestHandler.someFunction;
 **/
var handle = {
	'/': requestHandlers.start,
	'/start': requestHandlers.start,
	'/upload': requestHandlers.upload
};


/**
 * Calls the start function, which creates a server
 * @param {Object router function} route
 * @param {Array} handle
 **/
server.start(router.route, handle);