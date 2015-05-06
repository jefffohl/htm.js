var region = require('../../src/model/Region.js');

describe('Region', function() {
    describe('create()', function() {
        it('should create a new Region object', function() {
        	var myRegion = region.create();
            expect(typeof myRegion).toEqual("object");
        });
        it('should have a default columnCount of 2048', function() {
        	var myRegion = region.create();
            expect(myRegion.columnCount).toEqual(2048);
        });
        it('should allow us to set the columnCount', function() {
            var myRegion = region.create({
                "columnCount" : {
                    value : 4096
                }
            });
            expect(myRegion.columnCount).toEqual(4096);
        });
    });
});