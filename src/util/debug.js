var colors = require("colors");

// private
function printPrototype(obj, i) {
    var n = Number(i || 0);
    var indent = Array(2 + n).join("-");
    for(var key in obj) {
        if(obj.hasOwnProperty(key)) {
            console.log(colors.gray(indent), colors.green(key), ": ", colors.blue(obj[key]));
        }
    }
    if(obj) {
        if(Object.getPrototypeOf) {
            printPrototype(Object.getPrototypeOf(obj), n + 1);
        } else if(obj.__proto__) {
            printPrototype(obj.__proto__, n + 1);
        }
    }
}

// public
var Debug = {
	logPrototype : printPrototype
};


module.exports = Debug;