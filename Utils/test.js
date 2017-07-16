var someTest = {
	capTest: function(str) {

		return str.replace(/\w\S*/g, function(text) {
	    // return text.charAt(0).toUpperCase() + text.substr(1).toLowerCase();
	    var x = text.charAt(0).toUpperCase() + text.substr(1).toLowerCase();
	    console.log(x + ' yooooooooooooooooooo');
		});
	}
}

module.exports = someTest;