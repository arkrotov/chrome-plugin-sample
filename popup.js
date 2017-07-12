function parse(e) {
	var gettingPage = chrome.extension.getBackgroundPage();
	gettingPage.console.info("parse was invoked");
}	

document.addEventListener('DOMContentLoaded', function() {
	var parseBtn = document.getElementById('parseBtn');
	parseBtn.onclick = parse; 
});