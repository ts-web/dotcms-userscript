// ==UserScript==
// @name Pwn dotCMS
// @description Made for version 2.something
// @author Matthias Dailey <matt@zeroriginal.com>
// @version 1
// @match http://devcms.liberty.edu/c/*
// ==/UserScript==

(function(){
	
	var disableLockWarning = function () {
		// there's an invisible overlay over the form, that, when clicked, triggers the warning and disappears.
		var overlays = document.getElementsByClassName('lockedWarningDiv');
		for (var i = 0; i < overlays.length; i++) {
			// remove the element
			overlays[i].parentNode.removeChild(overlays[i]);
		}
	};


	// Run
	disableLockWarning();
	
}())