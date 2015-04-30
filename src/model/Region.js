// dependencies
var Column = require("./Column.js");

// private
var region = {

	/**
	* List of all columns
	*/
	columns : [],

	/**
	* A parameter controlling the number of columns that will be winners after the inhibition step.
	*/
	desiredLocalActivity : 10,

	/**
	* Average connected receptive field size of the columns.
	*/
	inhibitionRadius : 50,

	/**
	* A minimum number of inputs that must be active for a column to be considered during the
	inhibition step.
	*/
	minOverlap : 10,

	/**
	* A data structure representing a synapse|contains a permanence value and the source input index.
	*/
	synapse : {
		permanence : null,
		sourceIndex : null
	},

	/**
	* If the permanence value for a synapse is greater than this value, it is said to be connected.
	*/
	connectedPerm : 10,

	/**
	* Amount permanence values of synapses are incremented during learning.
	*/
	permanenceInc : 1,

	/**
	* Amount permanence values of synapses are decremented during learning.
	*/
	permanenceDec : 1,

	/**
	* The input to this level at time t.
	*/
	input : function( t, j ) {
		return;
	},

	/**
	* The pattern memory overlap of column c with a particular input pattern.
	*/
	setOverlap : function( columnIndex, overlap ) {
		columns[columnIndex].overlap = overlap;
		return columns[columnIndex];
	},

	/**
	* List of columns that will be winners due to bottom-up input.
	*/
	activeColumns : function( t ) {
		return;
	},

	/**
	* A list of all the columns that are within inhibitionRadius of column c.
	*/
	neighbors : function( c ) {
		return;
	},

	/**
	* The boost value for column c as computed during learning - used to increase the overlap value for inactive columns.
	*/
	boost : function( c ) {
		return;
	},

	/**
	* The list of potential synapses and their permanence values.
	*/
	potentialSynapses : function( c ) {
		return;
	},

	/**
	* A subset of potentialSynapses(c) where the permanence value is greater than connectedPerm.
	* These are the bottom-up inputs that are currently connected to column c.
	*/
	connectedSynapses : function( c ) {
		return;
	},


	/**
	* A sliding average representing how often column c has been active after inhibition
	* (e.g. over the last 1000 iterations).
	*/
	activeDutyCycle : function( c ) {
		return;
	},

	/**
	* A sliding average representing how often column c has had significant overlap (i.e.,
	* greater than minOverlap) with its inputs (e.g. over the last 1000 iterations).
	*/
	overlapDutyCycle : function( c ) {
		return;
	},

	/**
	* A variable representing the minimum desired firing rate for a cell. If a cell's firing rate
	* falls below this value, it will be boosted. This value is calculated as 1% of the maximum firing rate of
	* its neighbors.
	*/
	minDutyCycle : function( c ) {
		return;
	},

	/** ROUTINES **/

	/**
	* Given the list of columns, return the k'th highest overlap value.
	*/

	kthScore : function( columns, k ) {
		return;
	},

	/**
	* Computes a moving average of how often column c has been active after inhibition.
	*/
	updateActiveDutyCycle : function( c ) {
		return;	
	},

	/**
	* Computes a moving average of how often column c has overlap greater than minOverlap.
	*/
	updateOverlapDutyCycle : function( c ) {
		return;
	},

	/**
	* The radius of the average connected receptive field size of all the columns.
	* The connected receptive field size of a column includes only the connected synapses (those with permanence
	* values >= connectedPerm). This is used to determine the extent of lateral inhibition between columns.
	*/
	averageReceptiveFieldSize : function() {
		return;
	},

	/**
	* Returns the maximum active duty cycle of the columns in the given list of columns.
	*/
	maxDutyCycles : function( columns ) {
		return;
	},

	/**
	* Increase the permanence value of every synapse in column c by a scale factors.
	*/
	increasePermanences : function( c, s ) {
		return;
	},

	/**
	* Returns the boost value of a column. The boost value is a scalar >= 1.
	* If activeDutyCyle(c) is above minDutyCycle(c), the boost value is 1.
	* The boost increases linearly once the column's activeDutyCyle starts falling below its minDutyCycle.
	*/
	boostFunction : function( c ) {
		return;
	},

	/**
	* Calculates the overlap value for all columns
	*/
	calculateOverlap : function(time) {
		for (var c = 0; c < columns.length; c++) {
			columns[c].overlap = 0;
			var synapes = connectedSynapses(columns[c]);
		 	for (var s = 0; s <  synapses.length; s++) {
		 		columns[c].overlap = columns[c].overlap + input(time, synapses[s].sourceInput);
		 	}
		 	if (columns[c].overlap < minOverlap) {
		 		columns[c].overlap = 0;
		 	} else {
		 		columns[c].overlap = columns[c].overlap * columns[c].boost;
		 	}
		}
	}
};

/**
* Public methods and properties
*/
var Region = {
	create : function(parameters) {
		return Object.create(region, parameters);
	}
};

module.exports = Region;