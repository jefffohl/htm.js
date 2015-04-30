// private
var synapse = {
	sourceInput : null
};


// public
var Synapse = {
	create : function(parameters) {
		return Object.create(synapse, parameters);
	}
};

module.exports = Synapse;