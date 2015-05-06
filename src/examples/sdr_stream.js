/**
* Generates a canned SDR stream
**/

var Stream = {
	make : function(length, dimensions) {
		var stream = [];
		var offset = 0;
		var onBits = Math.ceil(dimensions * 0.02);
		for (var l = 0; l < length; l++) {
			var sdr = [];
			for (var d = 0; d < dimensions; d++) {
				if (d > offset && d < onBits + offset) {
					sdr.push(1);
				} else {
					sdr.push(0);
				}
			}
			stream.push(sdr);
			offset++;
		}
		return stream;
	}
};

module.exports = Stream;