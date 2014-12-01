if ( typeof define === "function" && define.amd ) {
	define(["jquery"], function($jq) {
		return function() {
			console.log("test dep:", $jq);
			this.test = true;
			this.myFunction = function() {
				console.log("test.myFunction()");
			}
		};
	});
}