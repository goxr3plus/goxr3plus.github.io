
// Add (i) Lines to html document
function doLines(i) {
	for (var j = 0; j <= i; j++)
		document.write("<br>");
}

// Script to open and close sidenav
function w3_open() {
	document.getElementById("mySidenav").style.display = "block";
	document.getElementById("myOverlay").style.display = "block";
}

function w3_close() {
	document.getElementById("mySidenav").style.display = "none";
	document.getElementById("myOverlay").style.display = "none";
}



