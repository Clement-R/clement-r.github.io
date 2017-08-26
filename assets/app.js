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

	// Isotope
	var grid = $('#projects-container').isotope({
		itemSelector: '.project',
		layoutMode: 'fitRows',
		percentPosition: true
	});

	// Nav bar highlight
	var pages = ["home", "blog", "contact"];

	if(!$.inArray(sessionStorage.getItem('selectedNav'), pages) || sessionStorage.getItem('selectedNav') == null) {
		sessionStorage.setItem('selectedNav', 'home');
	}

	$('.hero > nav > ul > li:eq(0)').on("click", function() {
		sessionStorage.setItem('selectedNav', 'home');
	});

	$('.hero > nav > ul > li:eq(1)').on("click", function() {
		sessionStorage.setItem('selectedNav', 'blog');
	});

	$('.hero > nav > ul > li:eq(2)').on("click", function() {
		sessionStorage.setItem('selectedNav', 'contact');
	});

	switch(sessionStorage.getItem('selectedNav')) {
		case "home":
			$('.hero > nav > ul > li:eq(0)').attr("id", "selected");
		break;

		case "blog":
			$('.hero > nav > ul > li:eq(1)').attr("id", "selected");
		break;

		case "contact":
			$('.hero > nav > ul > li:eq(2)').attr("id", "selected");
		break;
	}

	// Project selectors highlight
	var filters = ["all", "school", "personal"];

	if(!$.inArray(sessionStorage.getItem('selectedFilter'), filters) || sessionStorage.getItem('selectedFilter') == null) {
		sessionStorage.setItem('selectedFilter', 'all');
	}

	$('.projects-selector:eq(0)').on("click", function() {
		// Remove id on others
		$('.projects-selector').each(function(index){
			$(this).removeAttr("id");
		});

		// Add id on clicked div
		$(this).attr("id", "filter-selected");

		// Set session variable
		sessionStorage.setItem('selectedFilter', 'all');
	});

	$('.projects-selector:eq(1)').on("click", function() {
		// Remove id on others
		$('.projects-selector').each(function(index){
			$(this).removeAttr("id");
		});

		// Add id on clicked div
		$(this).attr("id", "filter-selected");

		// Set session variable
		sessionStorage.setItem('selectedFilter', 'school');
	});

	$('.projects-selector:eq(2)').on("click", function() {
		// Remove id on others
		$('.projects-selector').each(function(index){
			$(this).removeAttr("id");
		});

		// Add id on clicked div
		$(this).attr("id", "filter-selected");

		// Set session variable
		sessionStorage.setItem('selectedFilter', 'personal');
	});

	$('.projects-selector').on( 'click', function() {
	  var filterValue = $(this).attr('data-filter');
	  grid.isotope({ filter: filterValue });
	});

	switch(sessionStorage.getItem('selectedFilter')) {
		case "all":
			$('.projects-selector:eq(0)').trigger( "click" );
		break;

		case "school":
			$('.projects-selector:eq(1)').trigger( "click" );
		break;

		case "personal":
			$('.projects-selector:eq(2)').trigger( "click" );
		break;
	}
});