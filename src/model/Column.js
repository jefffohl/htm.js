// private
var column = {

};


// public
var Column = {
	create : function(parameters) {
		return Object.create(column, parameters);
	}
};

module.exports = Column;