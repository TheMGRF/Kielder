function openNav() {
	$('#sideNav').css('width', '270px');
	$('#navBarButton').css('opacity', '0');
}

function closeNav() {
	$('#sideNav').css('width', '0');
	$('#navBarButton').css('opacity', '1');
}

// On click, toggle between hiding and showing the dropdown content
function toggleDisplay() {
	$('#navDropdown').toggle("display", true);
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
	if ($('#sideNav').css('width') === "270px") {
		closeNav();
	}

  	if (!event.target.matches('.dropbtn')) {
		var dropdowns = $('.dropdown-content');

	    for (var i = 0; i < dropdowns.length; i++) {
      		var openDropdown = dropdowns[i];
      		if (openDropdown.classList.contains('show')) {
        		openDropdown.classList.remove('show');
      		}
    	}
  	}
}
