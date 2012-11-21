$(document).ready(function(){
	$('#main-slider ul').cycle({
	fx:'scrollLeft',
	speed:700,
	timeout:4000,
	next:   '#next-slide', 
	prev:   '#prev-slide'
	});
	
});