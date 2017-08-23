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