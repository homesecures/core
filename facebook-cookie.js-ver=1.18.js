function getFBCookie(name) {
   function escape(s) { return s.replace(/([.*+?\^${}()|\[\]\/\\])/g, '\\$1'); };
   var match = document.cookie.match(RegExp('(?:^|;\\s*)' + escape('_' + name) + '=([^;]*)'));
   return match ? match[1] : null;
}
function checkAndPushCookie(tagName) {
	var cookieValue = getFBCookie(tagName);
	console.log(cookieValue);
	if (cookieValue != null && cookieValue != "") {
		var tagToPush = {};
		tagToPush[tagName] = cookieValue;
		(window._rgba_tags = (window._rgba_tags || [])).push(tagToPush);
	}
	return cookieValue;
}
function pushFacebookCookie() {
	var retryAttempts = 0;
	var cookieCheckInterval = setInterval(function() {
		var fbpValue = checkAndPushCookie("fbp");
		var fbcValue = checkAndPushCookie("fbc");
		if ((fbpValue != null && fbcValue != null && fbpValue != "" && fbcValue != "") || retryAttempts > 3) {
			clearInterval(cookieCheckInterval);
		}
		retryAttempts++;
	}, 1000);
}
pushFacebookCookie();
