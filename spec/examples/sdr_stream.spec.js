var stream = require('../../src/examples/sdr_stream.js');

stream.init(10,10);

describe('sdr_stream', function() {
    describe('init(10,10)', function() {
        it('should initialize the stream with SDRs 10 bits in length', function() {
            expect(stream.dimensions).toEqual(10);
        });
        it('should initialize the stream with a limit of 10', function() {
        	var myStream = stream.init(10,10);
            expect(stream.limitTo).toEqual(10);
        });
    });
    describe('read the stream', function() {
    	var output = [];
    	var expectedOutput = [
			[ 1, 0, 0, 0, 0, 0, 0, 0, 0, 0 ],
			[ 0, 1, 0, 0, 0, 0, 0, 0, 0, 0 ],
			[ 0, 0, 1, 0, 0, 0, 0, 0, 0, 0 ],
			[ 0, 0, 0, 1, 0, 0, 0, 0, 0, 0 ],
			[ 0, 0, 0, 0, 1, 0, 0, 0, 0, 0 ],
			[ 0, 0, 0, 0, 0, 1, 0, 0, 0, 0 ],
			[ 0, 0, 0, 0, 0, 0, 1, 0, 0, 0 ],
			[ 0, 0, 0, 0, 0, 0, 0, 1, 0, 0 ],
			[ 0, 0, 0, 0, 0, 0, 0, 0, 1, 0 ],
			[ 0, 0, 0, 0, 0, 0, 0, 0, 0, 1 ]
		];
		beforeEach(function(done) {
			stream.stream.on('data', function(chunk){
				output.push(JSON.parse(chunk));
			});
			stream.stream.on('end', function(){
				done();
			})
	    });
		it('should output an array of arrays', function() {
        	expect(output).toEqual(expectedOutput);
        });
    });
});