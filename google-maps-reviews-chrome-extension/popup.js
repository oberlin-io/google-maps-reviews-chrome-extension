// Inject the payload.js script into the current tab after the popout has loaded
window.addEventListener('load', function (evt) {
	chrome.extension.getBackgroundPage().chrome.tabs.executeScript(null, {
		file: 'payload.js'
	});
});

// Listen to messages from the payload.js script and write to popout.html
chrome.runtime.onMessage.addListener(function (message) {
   
   var output = "";

   for (i = 0; i < message["Results"].length; i++) {
      output += message["Results"][i]["Name"] + "<br>"
      output += "- Stars .... " + message["Results"][i]["Stars"] + "<br>"
      output += "- Reviews .. " + message["Results"][i]["Reviews"] + "<br><br>"
   }
   
	document.getElementById('output').innerHTML = output;
});