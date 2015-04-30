/**
 * @author jefffohl / http://fohl.com/
 */

// Utilities
var util				= require('util');
var debug				= require('./util/debug.js');

// Model
var Region	= require('./model/Region.js');

// Tests
var myRegion = Region.create();

debug.logPrototype(myRegion);

