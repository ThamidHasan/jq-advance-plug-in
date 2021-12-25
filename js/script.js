$(document).ready(function(){

	// Counter Up
	$('.counter').counterUp({
    delay: 10,
    time: 1000
	});

	new WOW().init();
	AOS.init();
});
