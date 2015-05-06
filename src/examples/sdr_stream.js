/**
* Generates a canned SDR stream
**/

var Readable = require('stream').Readable;

var Stream = {

	stream : null,

	offset : 0,

	wrap : 0,

	onBits : 0,

	dimensions : 0,

	counter : 0,

	limitTo : null,

	init : function (dimensions, limitTo) {
		if (limitTo) {
			this.limitTo = limitTo;
		}
		this.dimensions = dimensions;
		this.counter = 1;
		this.offset = 0;
		this.wrap = 0;
		this.onBits = Math.floor(this.dimensions * 0.02);
		if (this.onBits < 1) {
			this.onBits = 1;
		}
		this.stream = new Readable();
		var self = this;
		this.stream._read = function() {
			var sdr = [];
			for (var d = 1; d <= self.dimensions; d++) {
				if ((d > self.offset && d <= self.onBits + self.offset) || d < self.wrap) {
					sdr.push(1);
				} else {
					sdr.push(0);
				}
			}
			var json = JSON.stringify(sdr);
			self.stream.push(json);
			if (self.offset + self.onBits >= self.dimensions - 1) {
				self.wrap++;
			} else {
				self.wrap = 0;
			}
			if (self.counter % self.dimensions === 0) {
				self.offset = 0;
			} else {
				self.offset++;
			}
			if (self.limitTo && self.limitTo === self.counter) {
				self.stream.push(null);
			} else {
				self.counter++;
			}
		};
	}
};

module.exports = Stream;