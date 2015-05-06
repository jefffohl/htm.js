/**
* Generates a canned SDR stream
**/

var Readable = require('stream').Readable;

var Stream = {
	stream : [],
	start : function(iterations, dimensions) {
		var length = iterations * dimensions;
		var offset = 0;
		var wrap = 0;
		var onBits = Math.floor(dimensions * 0.02);
		if (onBits < 1) {
			onBits = 1;
		}
		for (var l = 1; l <= length; l++) {
			var sdr = [];
			for (var d = 1; d <= dimensions; d++) {
				if ((d > offset && d <= onBits + offset) || d < wrap) {
					sdr.push(1);
				} else {
					sdr.push(0);
				}
			}
			this.stream.push(sdr);
			if (offset + onBits >= dimensions - 1) {
				wrap++;
			} else {
				wrap = 0;
			}
			if (l % dimensions === 0) {
				offset = 0;
			} else {
				offset++;
			}
		}
		this.stream.push(null);
	}
};

module.exports = Stream;