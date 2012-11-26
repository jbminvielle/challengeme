$(document).ready(function(){
	$('#main-slider ul').cycle({
	fx:'scrollLeft',
	speed:700,
	timeout:4000,
	next:   '#next-slide', 
	prev:   '#prev-slide'
	});
	
});

window.addEventListener("DOMContentLoaded", init, false);

function init(){
	if (navigator.geolocation) {
		navigator.geolocation.getCurrentPosition(geoSuccess, geoError,{enableHighAccuracy:true} );
	}
	else {
		console.log('pas de geolocalisation');
	}
};

function geoSuccess(position) {
	geoLat = position.coords.latitude;
	geoLng = position.coords.longitude;
	var mapCanvas=document.getElementById("map");
	var latlng = new google.maps.LatLng(geoLat, geoLng);
	var settings = {
		zoom: 13,
		center: latlng,
		mapTypeId: google.maps.MapTypeId.ROADMAP
		};
	geoMap = new google.maps.Map(document.querySelector('#map div'), settings);
};

function geoError(e) {
	console.log('fkgrkfkglt');
};