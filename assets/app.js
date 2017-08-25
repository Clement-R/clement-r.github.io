/* particlesJS.load(@dom-id, @path-json, @callback (optional)); */

/*
particlesJS.load('particles-js', 'assets/particles.json', function() {
  console.log('callback - particles.js config loaded');

  	var canvasElement = document.getElementsByClassName("particles-js-canvas-el");
	for (var i=0; i<canvasElement.length; i++) {
	  canvasElement[i].style.height = "50%";
	  canvasElement[i].height(0);
	}
});
*/

$(document).ready(function(){

	var pages = ["home", "blog", "contact"];

	if(!$.inArray(sessionStorage.getItem('selectedNav'), pages) || sessionStorage.getItem('selectedNav') == null) {
		sessionStorage.setItem('selectedNav', 'home');
	}

	$('#particles-js > nav > ul > li:eq(0)').on("click", function() {
		sessionStorage.setItem('selectedNav', 'home');
	});

	$('#particles-js > nav > ul > li:eq(1)').on("click", function() {
		sessionStorage.setItem('selectedNav', 'blog');
	});

	$('#particles-js > nav > ul > li:eq(2)').on("click", function() {
		sessionStorage.setItem('selectedNav', 'contact');
	});

	switch(sessionStorage.getItem('selectedNav')) {
		case "home":
			$('#particles-js > nav > ul > li:eq(0)').attr("id", "selected");
		break;

		case "blog":
			$('#particles-js > nav > ul > li:eq(1)').attr("id", "selected");
		break;

		case "contact":
			$('#particles-js > nav > ul > li:eq(2)').attr("id", "selected");
		break;
	}

	var grid = $('#projects-container').isotope({
		itemSelector: '.project',
		layoutMode: 'fitRows',
		percentPosition: true
	});

	$('.projects-selector').on( 'click', function() {
	  var filterValue = $(this).attr('data-filter');
	  grid.isotope({ filter: filterValue });
	});
});