$(function() {

	// Get the modal
	var contactModal = document.getElementById('contactModal');
	var xr3PlayerModal = document.getElementById('id01');

	//prompt("I am Working", "yes");
	$(document).tooltip({
		track : true
	});

	$(".tabContainer").tabs();

	// When the user clicks anywhere outside of the modal, close it
	window.onclick = function(event) {
		if (event.target == contactModal)
			contactModal.style.display = "none";
		else if (event.target == xr3PlayerModal)
			xr3PlayerModal.style.display = "none";
	};

});
