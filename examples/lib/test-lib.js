window.define && define.amd && define(["jquery"], function($jq) {
	return function() {
		$jq('body').html(navigator.userAgent);
	};
});