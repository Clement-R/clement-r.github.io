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

	// Firefox fix to set height of project boxes on homepage
	window.addEventListener('resize', function(){
		$(".project").each(function(){
			$(this).css("height", $(this).css("width"));

			/*$(this).find('*').each(function(){
				$(this).css("height", $(this).css("width"));
			});*/

			$(this).find('.project > a').each(function(){
				$(this).css("height", $(this).css("width"));
			});

			$(this).find('.square-box').each(function(){
				$(this).css("height", $(this).css("width"));
			});

			$(this).find('.square-content').each(function(){
				$(this).css("height", $(this).css("width"));
			});
		});
	}, true);

	$(".project").each(function(){
		$(this).css("height", $(this).css("width"));

		$(this).find('.project > a').each(function(){
			$(this).css("height", $(this).css("width"));
		});

		$(this).find('.square-box').each(function(){
			$(this).css("height", $(this).css("width"));
		});

		$(this).find('.square-content').each(function(){
			$(this).css("height", $(this).css("width"));
		});
	});

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

	// Form obfuscation
	$("#form-submit").on("click", function() {
		// Obfuscate that email :D
		var base64_email = 'cm9uZGVhdS5jbGVtZW50QGdtYWlsLmNvbQ==';
		var base_url ="http://formspree.io/";
		var action = base_url + atob(base64_email);
		$("form").attr("action", action);
	});
});