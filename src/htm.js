/**
 * @author Jeff Fohl / http://fohl.com/
 *
 */

// Utilities
var util = require('util');
var debug = require('./util/debug.js');
var stream = require('./examples/sdr_stream.js');

// Model
var Region = require('./model/Region.js');


// Tests
var myParameters = {
	"columnCount" : {
		value : 2048 
	}
};

var myRegion = Region.create(myParameters);

var myStream = stream.start(5,10);



