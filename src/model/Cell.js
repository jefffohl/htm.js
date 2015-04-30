// private
var cell = {

};


// public
var Cell = {
	create : function(parameters) {
		return Object.create(cell, parameters);
	}
};

module.exports = Cell;