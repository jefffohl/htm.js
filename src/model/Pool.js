// private
var pool = {

};


// public
var Pool = {
	create : function(parameters) {
		return Object.create(pool, parameters);
	}
};

module.exports = Pool;