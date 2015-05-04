// private
var synapse = {
	permanence : null,
	sourceInput : null
};

// public
var Synapse = {
	create : function(parameters) {
		return Object.create(synapse, parameters);
	}
};

module.exports = Synapse;